export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-10 bg-gray-200 dark:bg-gray-900 text-sm text-zinc-500">
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 px-6">
        <div>
          <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Product
          </h5>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Company
          </h5>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Resources
          </h5>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Use cases
          </h5>
          <ul className="space-y-2">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Marketplaces</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Social
          </h5>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Legal
          </h5>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
        <div>
          <div className="flex justify-center items-center mt-10 text-sm text-zinc-500 text-center">
            &copy; {new Date().getFullYear()} Bdu Blog. All rights
            reserved.
          </div>
        </div>
    </footer>
  );
}
