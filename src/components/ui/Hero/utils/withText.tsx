import React from 'react';

interface WithTextProps {
  text?: string;
  textPosition?: 'top' | 'bottom';
  textClassName?: string;
}

function withText<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  defaultText?: string,
  defaultPosition: 'top' | 'bottom' = 'bottom'
) {
  const WithTextComponent = (props: P & WithTextProps) => {
    const {
      text = defaultText,
      textPosition = defaultPosition,
      textClassName = '',
      ...restProps
    } = props;

    const textElement = text ? (
      <p
        className={`text-text-primary text-xs font-normal mt-1 leading-4 ${textClassName}`}
      >
        {text}
      </p>
    ) : null;

    return (
      <div className="flex flex-col gap-2">
        {textPosition === 'top' && textElement}
        <WrappedComponent {...(restProps as P)} />
        {textPosition === 'bottom' && textElement}
      </div>
    );
  };

  WithTextComponent.displayName = `withText(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithTextComponent;
}

export default withText;
