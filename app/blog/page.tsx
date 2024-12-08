export default function Blog() {
  // This is a placeholder. In a real application, you'd fetch blog posts from a database or CMS.
  const posts = [
    { id: 1, title: "My First Blog Post", excerpt: "This is the beginning of my blogging journey..." },
    { id: 2, title: "Exploring New Technologies", excerpt: "Today, we're going to look at some cutting-edge tech..." },
    { id: 3, title: "Reflections on Travel", excerpt: "My recent trip to Japan taught me so much about..." },
  ]

  return (
    <div className="space-y-6">
      <div className="py-24">
      </div>
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded-md">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.excerpt}</p>
            {/* Add a "Read More" link here */}
          </div>
        ))}
      </div>
    </div>
  )
}

