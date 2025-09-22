'use client'

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-medium text-[#666] uppercase tracking-wider mb-8">
            In Kooperation mit
          </h3>
          <div className="flex justify-center items-center">
            <div className="relative group cursor-pointer">
              <img
                src="/GEWI_Logo_rgb.png.webp"
                alt="GEWI Partner"
                className="h-16 md:h-20 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A866C]/0 via-[#7A866C]/5 to-[#7A866C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}