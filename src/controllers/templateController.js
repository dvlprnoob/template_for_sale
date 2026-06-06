import { categories, templates } from '../models/templateRegistry'

export function getCategories() {
  return categories.map((category) => ({
    ...category,
    templateCount: category.templates.length,
  }))
}

export function getCategoryBySlug(categorySlug) {
  return getCategories().find((category) => category.slug === categorySlug)
}

export function getTemplatesByCategory(categorySlug) {
  return templates.filter((template) => template.categorySlug === categorySlug)
}

export function getTemplateBySlug(categorySlug, templateSlug) {
  return templates.find(
    (template) => template.categorySlug === categorySlug && template.slug === templateSlug,
  )
}

export function getFeaturedTemplates(limit = 6) {
  return templates.slice(0, limit)
}

export function getCustomRequestItems() {
  return [
    'Backend, CMS, database, dan API integration',
    'Login, admin panel, payment gateway, booking, dan invoice',
    'Contact form tersimpan, dashboard operasional, dan automasi bisnis',
  ]
}
