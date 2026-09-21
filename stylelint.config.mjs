/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    // Litir eins og í verkefnalýsingu, t.d. #996644 en ekki #964.
    'color-hex-length': null,
  },
};
