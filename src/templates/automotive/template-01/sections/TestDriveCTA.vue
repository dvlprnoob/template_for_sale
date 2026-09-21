<script setup>
import ContactButton from './ContactButton.vue'
import SectionLabel from './SectionLabel.vue'
import { useTemplateTheme } from '../useTemplateTheme.js'

const props = defineProps({
  template: {
    type: Object,
    required: true,
  },
  testDrive: {
    type: Object,
    required: true,
  },
})

const themeVars = useTemplateTheme(props.template)
</script>

<template>
  <section class="auto-test-drive" :style="themeVars">
    <div class="page-shell">
      <div class="test-drive-box">
        <div class="test-drive-box__content">
          <SectionLabel :text="template.design?.testDriveLabel || 'Test Drive'" tone="light" />
          <h2>{{ testDrive.title }}</h2>
          <p>{{ testDrive.description }}</p>
        </div>

        <div class="test-drive-box__action">
          <ContactButton :contact="template.contact" :template="template" rounded="xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.auto-test-drive {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 9vw, 116px) 0;
  background:
    radial-gradient(circle at 90% 20%, color-mix(in srgb, var(--tpl-primary), transparent 78%), transparent 28%),
    var(--tpl-dark);
  color: #ffffff;
  font-family: var(--tpl-body-font);
}

.auto-test-drive::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background: repeating-linear-gradient(-18deg, rgba(255,255,255,0.16) 0 1px, transparent 1px 32px);
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.test-drive-box {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
  padding: clamp(34px, 6vw, 58px);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: calc(var(--tpl-radius) + 2px);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04)),
    rgba(255,255,255,0.05);
  backdrop-filter: blur(22px);
  box-shadow: var(--tpl-shadow-dark);
}

.test-drive-box::after {
  content: '';
  position: absolute;
  right: -100px;
  bottom: -140px;
  width: 330px;
  height: 330px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tpl-primary), transparent 74%);
  filter: blur(28px);
}

.test-drive-box__content,
.test-drive-box__action {
  position: relative;
  z-index: 1;
}

.test-drive-box h2 {
  margin: 16px 0;
  font-family: var(--tpl-heading-font);
  font-size: clamp(2.35rem, 6vw, 5rem);
  line-height: 0.94;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  text-wrap: balance;
}

.test-drive-box p {
  width: min(620px, 100%);
  margin: 0;
  color: rgba(255,255,255,0.68);
  line-height: 1.75;
}

.test-drive-box__action {
  justify-self: end;
}

@media (max-width: 900px) {
  .test-drive-box {
    grid-template-columns: 1fr;
  }

  .test-drive-box__action {
    justify-self: start;
  }
}

@media (max-width: 560px) {
  .auto-test-drive {
    padding: 64px 0;
  }

  .test-drive-box {
    border-radius: 26px;
  }
}
</style>
