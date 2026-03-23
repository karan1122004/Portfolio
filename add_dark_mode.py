import os
import glob
import re

components = glob.glob('src/components/*.jsx') + ['src/App.jsx']

def replace_exact(content, old, new):
    # Using regex boundary `\b` to avoid matching bg-slate-50 when it's already bg-slate-50 dark:bg-dark-900
    # Wait, simple replace is okay if we only run it once and there are no overlapping names,
    # but to be safe we can use regex
    pattern = r"(?<!dark:)\b" + re.escape(old) + r"\b(?!\s+dark:)"
    # for hover:, we might not have \b at the beginning because of the colon.
    if ":" in old:
        pattern = r"(?<!dark:)(?<=\s|[\"\'`])" + re.escape(old) + r"(?!\s+dark:)"
    if "/" in old or "[" in old:
        pattern = r"(?<!dark:)(?<=\s|[\"\'`])" + re.escape(old)

    # Some basic safe replace for CSS classes
    # let's just do a plain replace but check if 'dark:' is already there
    return content.replace(old, new)

replacements = {
    'bg-slate-50': 'bg-slate-50 dark:bg-dark-900',
    'bg-white': 'bg-white dark:bg-dark-800', # Wait, bg-white can be inside bg-white/5 etc...
}

# Instead of blindly replacing, since we just went from dark -> light, we can replace the light classes with light + dark format.
# But "bg-white" might falsely match "bg-white/60".
# Let's do a strict regex replace.
def process_file(file):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define exact class replacements.
    pairs = [
        (r'\bbg-slate-50\b', 'bg-slate-50 dark:bg-dark-900'),
        (r'\bbg-white\b', 'bg-white dark:bg-dark-800'),
        (r'\bbg-slate-100\b', 'bg-slate-100 dark:bg-dark-700'),
        (r'\btext-slate-900\b', 'text-slate-900 dark:text-white'),
        (r'\btext-slate-800\b', 'text-slate-800 dark:text-gray-200'),
        (r'\btext-slate-700\b', 'text-slate-700 dark:text-gray-300'),
        (r'\btext-slate-600\b', 'text-slate-600 dark:text-gray-400'),
        (r'\btext-slate-500\b', 'text-slate-500 dark:text-gray-500'),
        (r'\bborder-black/5\b', 'border-black/5 dark:border-white/10'),
        (r'\bborder-black/10\b', 'border-black/10 dark:border-white/20'),
        (r'hover:border-black/10\b', 'hover:border-black/10 dark:hover:border-white/20'),
        (r'\bmix-blend-multiply\b', 'mix-blend-multiply dark:mix-blend-screen'),
        (r'\bopacity-\[0\.04\]\b', 'opacity-[0.04] dark:opacity-[0.02]'),
        (r'hover:bg-slate-100\b', 'hover:bg-slate-100 dark:hover:bg-white/10'),
    ]

    for old, new in pairs:
        # replace if not already containing dark variant
        content = re.sub(old + r'(?!\s+dark:)', new, content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

for file in components:
    process_file(file)

print("Added dark variants.")
