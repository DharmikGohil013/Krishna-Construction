/* ===============================================
   Krishna Construction - Projects Page JavaScript
   =============================================== */

// Global variables
let allProjects = [];
let filteredProjects = [];
let currentFilter = 'all';
let currentPage = 1;
const projectsPerPage = 6;

/* ===============================================
   Fetch Projects Data
   =============================================== */
async function fetchProjects() {
  try {
    const response = await fetch('data/projects.json');
    const data = await response.json();
    allProjects = data.projects;
    filteredProjects = [...allProjects];
    renderProjects();
    updateProjectCount();
  } catch (error) {
    console.error('Error loading projects:', error);
    showError();
  }
}

/* ===============================================
   Render Projects
   =============================================== */
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const noResults = document.getElementById('noResults');
  const loadMoreContainer = document.getElementById('loadMoreContainer');

  // Clear existing projects
  projectsGrid.innerHTML = '';

  // Calculate projects to show
  const startIndex = 0;
  const endIndex = currentPage * projectsPerPage;
  const projectsToShow = filteredProjects.slice(startIndex, endIndex);

  // Check if there are projects to display
  if (filteredProjects.length === 0) {
    noResults.style.display = 'block';
    loadMoreContainer.style.display = 'none';
    return;
  }

  noResults.style.display = 'none';

  // Render each project
  projectsToShow.forEach((project, index) => {
    const projectCard = createProjectCard(project);
    projectCard.style.animationDelay = `${index * 0.1}s`;
    projectsGrid.appendChild(projectCard);
  });

  // Show/hide load more button
  if (endIndex < filteredProjects.length) {
    loadMoreContainer.style.display = 'block';
  } else {
    loadMoreContainer.style.display = 'none';
  }
}

/* ===============================================
   Create Project Card
   =============================================== */
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card fade-in';
  card.setAttribute('data-category', project.category);

  // Get up to 3 features
  const displayFeatures = project.features.slice(0, 3);

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.thumbnail || 'https://via.placeholder.com/400x280?text=Project+Image'}"
           alt="${project.title}"
           loading="lazy"
           onerror="this.src='https://via.placeholder.com/400x280?text=Project+Image'">
      <span class="project-category">${project.category}</span>
      <span class="project-status">
        <i class="fas fa-check-circle"></i> ${project.status}
      </span>
      <div class="project-overlay">
        <div class="project-overlay-content">
          <div class="project-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>${project.location}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>

      <div class="project-features">
        ${displayFeatures.map(feature => `
          <span class="feature-tag">${feature}</span>
        `).join('')}
        ${project.features.length > 3 ? `<span class="feature-tag">+${project.features.length - 3} more</span>` : ''}
      </div>

      <div class="project-meta">
        <div class="project-meta-item">
          <span class="project-meta-label">Area</span>
          <span class="project-meta-value">${project.area}</span>
        </div>
        <div class="project-meta-item">
          <span class="project-meta-label">Duration</span>
          <span class="project-meta-value">${project.duration}</span>
        </div>
        <div class="project-meta-item">
          <span class="project-meta-label">Completed</span>
          <span class="project-meta-value">${formatDate(project.date)}</span>
        </div>
      </div>

      <div class="project-action">
        <a href="project-detail.html?id=${project.id}" class="project-link">
          View Details <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;

  // Add click handler for the entire card
  card.addEventListener('click', (e) => {
    // Don't navigate if clicking on the link directly
    if (!e.target.closest('.project-link')) {
      window.location.href = `project-detail.html?id=${project.id}`;
    }
  });

  return card;
}

/* ===============================================
   Filter Projects
   =============================================== */
function filterProjects(category) {
  currentFilter = category;
  currentPage = 1;

  if (category === 'all') {
    filteredProjects = [...allProjects];
  } else {
    filteredProjects = allProjects.filter(project => project.category === category);
  }

  // Apply search if active
  const searchTerm = document.getElementById('projectSearch').value;
  if (searchTerm) {
    searchProjects(searchTerm);
    return;
  }

  renderProjects();
  updateProjectCount();
}

/* ===============================================
   Search Projects
   =============================================== */
function searchProjects(searchTerm) {
  const term = searchTerm.toLowerCase().trim();

  if (!term) {
    filterProjects(currentFilter);
    return;
  }

  // Start with current filter
  let baseProjects = currentFilter === 'all' ? allProjects : allProjects.filter(p => p.category === currentFilter);

  // Search in title, description, location, and features
  filteredProjects = baseProjects.filter(project => {
    return (
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.location.toLowerCase().includes(term) ||
      project.features.some(feature => feature.toLowerCase().includes(term)) ||
      project.category.toLowerCase().includes(term)
    );
  });

  currentPage = 1;
  renderProjects();
  updateProjectCount();
}

/* ===============================================
   Update Project Count
   =============================================== */
function updateProjectCount() {
  const countElement = document.getElementById('projectCount');
  if (countElement) {
    countElement.textContent = filteredProjects.length;
  }
}

/* ===============================================
   Load More Projects
   =============================================== */
function loadMoreProjects() {
  currentPage++;
  renderProjects();

  // Smooth scroll to new projects
  setTimeout(() => {
    const projectsGrid = document.getElementById('projectsGrid');
    const newProjects = projectsGrid.children;
    const scrollTarget = newProjects[Math.min((currentPage - 1) * projectsPerPage, newProjects.length - 1)];

    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}

/* ===============================================
   Format Date
   =============================================== */
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
}

/* ===============================================
   Show Error
   =============================================== */
function showError() {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = `
    <div class="loading">
      <i class="fas fa-exclamation-triangle"></i>
      <p>Failed to load projects. Please try again later.</p>
    </div>
  `;
}

/* ===============================================
   Show Loading
   =============================================== */
function showLoading() {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = `
    <div class="loading">
      <i class="fas fa-spinner"></i>
      <p>Loading projects...</p>
    </div>
  `;
}

/* ===============================================
   Initialize Event Listeners
   =============================================== */
function initializeEventListeners() {
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Filter projects
      const category = button.getAttribute('data-filter');
      filterProjects(category);
    });
  });

  // Search input
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchProjects(e.target.value);
      }, 300); // Debounce search
    });
  }

  // Load more button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreProjects);
  }
}

/* ===============================================
   Initialize on DOM Load
   =============================================== */
document.addEventListener('DOMContentLoaded', () => {
  showLoading();
  initializeEventListeners();
  fetchProjects();
});