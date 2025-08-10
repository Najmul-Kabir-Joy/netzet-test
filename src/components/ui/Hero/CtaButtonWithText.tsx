import CtaButton from './CtaButton';
import withText from './utils/withText';

// Create enhanced CTA button with text wrapper
const CtaButtonWithText = (
  props: React.ComponentProps<typeof CtaButton> & { text: string }
) => withText(CtaButton, props.text, 'bottom')(props);

export default CtaButtonWithText;
