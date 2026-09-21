import { computed } from 'vue'

export function useTemplateTheme(templateRef) {
  return computed(() => {
    const template = templateRef?.value || templateRef || {}
    const design = template.design || {}

    const primary = design.primaryColor || '#dc2626'
    const secondary = design.secondaryColor || '#991b1b'
    const dark = design.darkColor || '#0b1118'
    const darkSoft = design.darkSoftColor || '#101820'
    const surface = design.surfaceColor || '#f5f7fb'
    const text = design.textColor || '#101820'
    const muted = design.mutedColor || '#64748b'
    const lightText = design.lightTextColor || '#ffffff'
    const radius = design.radius || '32px'
    const fontHeading = design.headingFont || "Impact, 'Arial Black', sans-serif"
    const fontBody = design.bodyFont || 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    const heroAlign = design.heroAlign || 'center'

    return {
      '--tpl-primary': primary,
      '--tpl-secondary': secondary,
      '--tpl-dark': dark,
      '--tpl-dark-soft': darkSoft,
      '--tpl-surface': surface,
      '--tpl-text': text,
      '--tpl-muted': muted,
      '--tpl-light': lightText,
      '--tpl-radius': radius,
      '--tpl-heading-font': fontHeading,
      '--tpl-body-font': fontBody,
      '--tpl-hero-align': heroAlign,
      '--tpl-hero-copy-align': heroAlign === 'left' ? 'left' : 'center',
      '--tpl-hero-copy-margin': heroAlign === 'left' ? '0 auto 0 0' : '0 auto',
      '--tpl-shadow-primary': `0 24px 70px color-mix(in srgb, ${primary}, transparent 72%)`,
      '--tpl-shadow-dark': '0 34px 110px rgba(0, 0, 0, 0.28)',
    }
  })
}
