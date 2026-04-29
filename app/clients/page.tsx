const clients = ['Government Departments', 'Schools & Colleges', 'Hospitals', 'Transport & Logistics Firms', 'Construction Companies', 'Private Corporates'];

export default function ClientsPage() {
  return (
    <main className='container-page py-12'>
      <h1 className='text-4xl font-bold text-brand-navy'>Trusted by Leading Organisations</h1>
      <p className='mt-3 max-w-3xl text-brand-dark/80'>Express Energy is proud to serve corporate, government and institutional clients across the Masvingo region.</p>
      <div className='mt-6 grid gap-3 md:grid-cols-3'>
        {clients.map((client) => (
          <div key={client} className='rounded-lg border border-brand-navy/15 bg-brand-offwhite p-4 text-sm font-medium'>{client}</div>
        ))}
      </div>
    </main>
  );
}
