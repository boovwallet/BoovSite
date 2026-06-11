import Image from "next/image";

export default function Home() {
  const details = [
    { label: "School", value: "Harvard University" },
    {
      label: "Email",
      value: (
        <a
          href="mailto:hadiabdul@college.harvard.edu"
          className="transition-colors hover:text-accent-deep"
        >
          hadiabdul@college.harvard.edu
        </a>
      ),
    },
    { label: "Location", value: "Durham, NC" },
  ];

  return (
    <main className="min-h-screen bg-paper px-5 py-10 sm:px-8 sm:py-14">
      <section
        className="mx-auto flex w-full max-w-[680px] flex-col items-center"
        aria-labelledby="profile-heading"
      >
        <h1
          id="profile-heading"
          className="text-center text-4xl font-semibold text-ink sm:text-5xl"
        >
          Hadi Abdul
        </h1>

        <div className="mt-8 w-full max-w-[380px] overflow-hidden rounded-xl border border-rule bg-white shadow-lift sm:mt-10">
          <Image
            src="/assets/portrait.jpg"
            alt="Portrait of Hadi Abdul"
            width={971}
            height={1398}
            className="aspect-[4/5] w-full object-cover"
            priority
          />
        </div>

        <dl className="mt-10 w-full divide-y divide-rule border-y border-rule sm:mt-12">
          {details.map(({ label, value }) => (
            <div
              key={label}
              className="grid gap-2 py-5 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-8 sm:py-6"
            >
              <dt className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {label}
              </dt>
              <dd className="min-w-0 break-words text-lg font-medium text-ink-soft sm:text-xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
