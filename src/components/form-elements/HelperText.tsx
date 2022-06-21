import React from 'react';

type Props = {
  show?: boolean;
  message?: string;
};
export default function HelperText({
  show = false,
  message,
}: React.PropsWithChildren<Props>) {
  return show && message ? (
    <div className={`text-left text-sm font-medium text-red-500 mb-4`}>{message}</div>
  ) : null;
}
