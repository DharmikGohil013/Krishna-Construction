/* ===============================================
   Krishna Construction - Testimonials Page JS
   =============================================== */

let allTestimonials = [];
let currentPage = 1;
const testimonialsPerPage = 6;

/* Fetch Testimonials */
async function fetchTestimonials() {
  try {
    const response = await fetch('data/testimonials.json');
    const data = await response.json();
    allTestimonials = data.testimonials;

    // Update summary stats
    updateStats(data.summary);

    // Render testimonials
    renderFeaturedTestimonials();
    renderAllTestimonials();
  } catch (error) {
    console.error('Error loading testimonials:', error);
    showError();
  }
}

/* Update Stats */
function updateStats(summary) {
  document.getElementById('avgRating').textContent = summary.averageRating.toFixed(1);
  document.getElementById('totalReviews').textContent = summary.totalReviews;
  document.getElementById('recommendationRate').textContent = `${summary.recommendationRate}%`;
}

/* Render Featured Testimonials */
function renderFeaturedTestimonials() {
  const container = document.getElementById('featuredTestimonials');
  const featured = allTestimonials.filter(t => t.featured);

  container.innerHTML = featured.map(testimonial => `
    <div class="featured-testimonial-card">
      <div class="stars">
        ${generateStars(testimonial.rating)}
      </div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">
          ${getInitials(testimonial.name)}
        </div>
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role} • ${testimonial.location}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render All Testimonials */
function renderAllTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  const loadMoreContainer = document.getElementById('loadMoreContainer');

  const startIndex = 0;
  const endIndex = currentPage * testimonialsPerPage;
  const testimonialsToShow = allTestimonials.slice(startIndex, endIndex);

  container.innerHTML = testimonialsToShow.map(testimonial => `
    <div class="testimonial-card">
      <div class="stars">
        ${generateStars(testimonial.rating)}
      </div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">
          ${getInitials(testimonial.name)}
        </div>
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
        </div>
      </div>
      <div class="testimonial-meta">
        <span class="testimonial-project">${testimonial.project}</span>
        <span>${formatDate(testimonial.date)}</span>
      </div>
    </div>
  `).join('');

  // Show/hide load more
  if (endIndex < allTestimonials.length) {
    loadMoreContainer.style.display = 'block';
  } else {
    loadMoreContainer.style.display = 'none';
  }
}

/* Generate Stars HTML */
function generateStars(rating) {
  let starsHTML = '';
  for (let i = 0; i < 5; i++) {
    starsHTML += `<i class="fas fa-star${i < rating ? '' : ' opacity-30'}"></i>`;
  }
  return starsHTML;
}

/* Get Initials */
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

/* Format Date */
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
}

/* Load More */
function loadMore() {
  currentPage++;
  renderAllTestimonials();
}

/* Show Error */
function showError() {
  document.getElementById('featuredTestimonials').innerHTML = `
    <div class="no-results">
      <i class="fas fa-exclamation-triangle"></i>
      <p>Failed to load testimonials</p>
    </div>
  `;
}

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
  fetchTestimonials();

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMore);
  }
});