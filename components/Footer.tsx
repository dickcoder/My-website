import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto px-4 py-8">
        <div className="flex justify-between md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground">A personal blog showcasing my thoughts, experiences, and creations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Me</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link></li>
              <li><Link href="/comments" className="text-muted-foreground hover:text-foreground">Comments</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 LOOPOASIS. All rights reserved.</p>
          <p>Made with ❤️ by <a href="https://github.com/dickcoder" className="text-muted-foreground hover:text-foreground">qhw</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

