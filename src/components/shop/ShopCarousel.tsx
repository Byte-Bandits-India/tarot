'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import { Modal } from '@/components/common/Modal';
import { WhatsAppIcon } from '@/components/common/Icons';
import { createWhatsAppOrderLink } from '@/lib/whatsapp';

export function ShopCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);

  const updateNav = () => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const pages = Math.max(1, Math.ceil((el.scrollWidth - 4) / el.clientWidth));
    const current = Math.round(el.scrollLeft / el.clientWidth);

    setTotalPages(pages);
    setActivePage(Math.min(current, pages - 1));
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateNav();
    window.addEventListener('resize', updateNav);
    return () => window.removeEventListener('resize', updateNav);
  }, []);

  const getStep = () => {
    if (!trackRef.current) return 300;
    const firstCard = trackRef.current.querySelector('.prod') as HTMLElement;
    return firstCard ? firstCard.offsetWidth + 22 : 300;
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -getStep(), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: getStep(), behavior: 'smooth' });
    }
  };

  const handleOpenQuickView = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleCloseQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="car">
      {/* Product Track */}
      <div
        className="track"
        ref={trackRef}
        onScroll={updateNav}
      >
        {PRODUCTS.map((prod) => (
          <button
            key={prod.id}
            type="button"
            className="prod"
            onClick={() => handleOpenQuickView(prod)}
          >
            <div className="im">
              <video
                src={prod.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
              />
              <span>{prod.category}</span>
            </div>
            <div className="bd">
              <h3>{prod.name}</h3>
              <div className="pr">₹{prod.price}</div>
              <span className="qv">Quick view →</span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="cnav">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canScrollPrev}
          aria-label="Previous products"
        >
          ←
        </button>
        <div className="dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <i key={i} className={i === activePage ? 'on' : ''} />
          ))}
        </div>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canScrollNext}
          aria-label="Next products"
        >
          →
        </button>
      </div>

      {/* Quick View Modal */}
      <Modal isOpen={!!selectedProduct} onClose={handleCloseQuickView}>
        {selectedProduct && (
          <>
            <div className="im">
              <video
                src={selectedProduct.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
              />
            </div>
            <div className="tx">
              <span className="badge mb-2">{selectedProduct.category}</span>
              <h3>{selectedProduct.name}</h3>
              <div className="pr">
                ₹{(selectedProduct.price * quantity).toLocaleString('en-IN')}
              </div>
              <p>{selectedProduct.description}</p>
              <ul>
                {selectedProduct.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="qty">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(20, quantity + 1))}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div>
                <a
                  href={createWhatsAppOrderLink(
                    selectedProduct.name,
                    quantity,
                    selectedProduct.price * quantity
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                >
                  <WhatsAppIcon size={18} /> Buy on WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
