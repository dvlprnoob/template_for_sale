export function applyTemplateTheme(template) {
  if (!template?.theme) return {}

  return {
    '--template-primary': template.theme.primary,
    '--template-secondary': template.theme.secondary,
    '--template-accent': template.theme.accent,
    '--template-surface': template.theme.surface,
    '--template-ink': template.theme.ink,
    '--template-font': template.theme.font,
  }
}

export function getThemeChips(template) {
  if (!template?.theme) return []

  return [
    { label: 'Primary', color: template.theme.primary },
    { label: 'Secondary', color: template.theme.secondary },
    { label: 'Accent', color: template.theme.accent },
  ]
}
