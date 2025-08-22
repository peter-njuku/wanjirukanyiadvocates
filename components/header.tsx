export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // change after 20px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-transparent shadow-none backdrop-blur-sm"
          : "bg-white border-b border-slate-200"
      )}
    >
      {/* Top contact bar */}
      <div
        className={cn(
          "py-2 transition-all duration-300",
          isScrolled ? "hidden" : "bg-slate-900 text-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <a
                href="tel:+254792932136"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                aria-label="Call us at +254792932136"
              >
                <Phone className="h-3 w-3" />
                <span>+254792932136</span>
              </a>
              <a
                href="mailto:wanjirukanyilawa@gmail.com"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                aria-label="Email us at wanjirukanyilawa@gmail.com"
              >
                <Mail className="h-3 w-3" />
                <span>wanjirukanyilawa@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <MapPin className="h-3 w-3" />
              <span>Mustard Seed Complex, Uthiru, Nairobi</span>
            </div>
          </div>
        </div>
      </div>
