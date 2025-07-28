// First, select a parent element, e.g., the 'skill-item' div
console.log("=== Searching Within Elements ===");
const skillContainer = document.querySelector('.skill-item');
console.log('Skill Container:', skillContainer);

// Now, select an element *inside* the skillContainer
const firstSkillListItem = skillContainer.querySelector('li');
console.log('First Skill List Item:', firstSkillListItem);

// Select all list items within the skillContainer
const allSkillListItems = skillContainer.querySelectorAll('li');
console.log('All Skill List Items:', allSkillListItems);