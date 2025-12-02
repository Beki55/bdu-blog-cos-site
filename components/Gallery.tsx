"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const campusImages: ImageItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "University Library",
    title: "Modern Library Building",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Campus Green Space",
    title: "Beautiful Campus Grounds",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Lecture Hall",
    title: "State-of-the-Art Lecture Halls",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Student Center",
    title: "Vibrant Student Center",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Research Labs",
    title: "Advanced Research Facilities",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Sports Complex",
    title: "Modern Sports Complex",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const openModal = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="mt-12">
        <h3 className="text-lg font-semibold mb-6">Campus Tour Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-sm">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-gray-50 dark:bg-black opacity-95 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl h-full max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src.replace("w=800", "w=1200")}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-xl font-semibold mb-1">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
