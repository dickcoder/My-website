export default function About() {
  return (
    <div className="space-y-6">
      <div className="py-24">
      </div>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-xl">Hi, I'm [Your Name]. Welcome to my personal blog!</p>
      <section>
        <h2 className="text-2xl font-semibold">Background</h2>
        <p>Here's where you can write about your personal background, interests, and experiences.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <p>Detail your career journey and professional achievements here.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p>This website is built using Next.js, React, Tailwind CSS, and shadcn/ui components.</p>
      </section>
    </div>
  )
}

