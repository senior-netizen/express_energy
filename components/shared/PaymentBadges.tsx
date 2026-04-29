export function PaymentBadges() {
  const badges = ['EcoCash', 'InnBucks', 'Omari', 'Cash (USD & ZWG)'];

  return (
    <div className='flex flex-wrap gap-3'>
      {badges.map((b) => (
        <button
          key={b}
          type='button'
          className='ui-focus-ring ui-press ui-hover-lift rounded-full bg-brand-light px-4 py-2 text-sm motion-safe:transition'
        >
          {b}
        </button>
      ))}
    </div>
  );
}
