import { useState, useEffect } from 'react';
import { fetchGalleryImages } from '../data/galleryData';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import Modal from '../components/Modal';

export default function Home() {
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const limit = 8;

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchGalleryImages(100);
      setAllImages(data);
      setLoading(false);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (selectedImage) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
  }, [selectedImage]);

  const filteredImages = allImages.filter((img) =>
    img.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredImages.length / limit);
  const startIndex = (page - 1) * limit;
  const currentImages = filteredImages.slice(startIndex, startIndex + limit);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">Explore Gallery</h2>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <Gallery images={currentImages} onImageClick={setSelectedImage} />
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </>
        )}
      </main>

      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}

