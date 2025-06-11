const { handleProjectFilter, initProjectFilters } = require('../filters');

describe('handleProjectFilter', () => {
  let buttons;
  let cards;

  beforeEach(() => {
    document.body.innerHTML = `
      <button class="filter-btn active" data-filter="all"></button>
      <button class="filter-btn" data-filter="web"></button>
      <div class="col-md-4 project-card" data-category="web" style="display: block;"></div>
      <div class="col-md-4 project-card" data-category="design" style="display: block;"></div>
    `;
    buttons = document.querySelectorAll('.filter-btn');
    cards = document.querySelectorAll('.col-md-4.project-card');
  });

  test('toggles active class and hides/shows cards', () => {
    const allBtn = buttons[0];
    const webBtn = buttons[1];

    // Filter by "web"
    handleProjectFilter({ target: webBtn });
    expect(webBtn.classList.contains('active')).toBe(true);
    expect(allBtn.classList.contains('active')).toBe(false);
    expect(cards[0].style.display).toBe('block');
    expect(cards[1].style.display).toBe('none');

    // Filter by "all"
    handleProjectFilter({ target: allBtn });
    expect(allBtn.classList.contains('active')).toBe(true);
    expect(webBtn.classList.contains('active')).toBe(false);
    expect(cards[0].style.display).toBe('block');
    expect(cards[1].style.display).toBe('block');
  });

  test('only clicked filter remains active', () => {
    document.body.innerHTML += `
      <button class="filter-btn" data-filter="design"></button>
    `;
    buttons = document.querySelectorAll('.filter-btn');
    cards = document.querySelectorAll('.col-md-4.project-card');

    const designBtn = buttons[2];
    handleProjectFilter({ target: designBtn });

    buttons.forEach(btn => {
      if (btn === designBtn) {
        expect(btn.classList.contains('active')).toBe(true);
      } else {
        expect(btn.classList.contains('active')).toBe(false);
      }
    });

    expect(cards[0].style.display).toBe('none');
    expect(cards[1].style.display).toBe('block');
  });

  test('initProjectFilters attaches click handlers', () => {
    initProjectFilters();
    const webBtn = buttons[1];
    webBtn.click();

    expect(webBtn.classList.contains('active')).toBe(true);
    expect(cards[0].style.display).toBe('block');
    expect(cards[1].style.display).toBe('none');
  });
});
