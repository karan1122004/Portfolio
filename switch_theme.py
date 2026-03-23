import os
import glob

components = glob.glob('src/components/*.jsx') + ['src/App.jsx']

replacements = {
    'bg-dark-900': 'bg-slate-50',
    'bg-dark-800': 'bg-white',
    'bg-dark-700': 'bg-slate-100',
    'text-white': 'text-slate-900',
    'text-gray-200': 'text-slate-800',
    'text-gray-300': 'text-slate-700',
    'text-gray-400': 'text-slate-600',
    'text-gray-500': 'text-slate-500',
    'border-white/10': 'border-black/5',
    'border-white/5': 'border-black/5',
    'border-white/20': 'border-black/10',
    'hover:border-white/20': 'hover:border-black/10',
    'mix-blend-screen': 'mix-blend-multiply',
    'opacity-[0.02]': 'opacity-[0.04]',
    'hover:bg-white/10': 'hover:bg-slate-100',
    'hover:-translate-y-2': 'hover:-translate-y-2',
}

for file in components:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    for old, new in replacements.items():
        content = content.replace(old, new)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Theme updated to light.")
