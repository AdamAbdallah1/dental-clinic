export const Gallery = () => {
  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
      title: 'Teeth Whitening'
    },
    {
      before: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=400&q=80',
      title: 'Smile Makeover'
    },
    {
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1606811996224-b5c5c4eb8d37?w=400&q=80',
      title: 'Dental Veneers'
    },
    {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80',
      title: 'Orthodontics'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the incredible transformations we've achieved for our patients. Real results, real smiles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {item.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-600 text-center">BEFORE</p>
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={item.before} 
                      alt={`Before ${item.title}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-600 text-center">AFTER</p>
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={item.after} 
                      alt={`After ${item.title}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            * Individual results may vary. Photos are of actual patients who consented to their use.
          </p>
        </div>
      </div>
    </section>
  );
};