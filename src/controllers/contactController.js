export function buildWhatsAppLink(contact, message = 'Halo, saya tertarik dengan template company profile ini.') {
  const phone = (contact?.whatsapp || '').replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function buildEmailLink(contact, subject = 'Request template company profile') {
  const email = contact?.email || 'hello@example.com'
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`
}

export function openContactAction(action, contact, template) {
  const ctaLabel = template?.cta?.primaryLabel || 'Request Template'
  const message = `Halo, saya tertarik dengan ${template?.companyName || 'template company profile'} untuk ${ctaLabel}.`
  const target =
    action === 'email'
      ? buildEmailLink(contact, `${ctaLabel} - ${template?.companyName || 'Company Profile Template'}`)
      : buildWhatsAppLink(contact, message)

  window.open(target, '_blank', 'noopener,noreferrer')
}
