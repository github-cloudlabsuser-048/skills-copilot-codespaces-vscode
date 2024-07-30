function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = member.querySelector('.member__skills');
  const memberSkillsList = memberSkills.querySelectorAll('.member__skills-list');

  memberSkillsList.forEach((list) => {
    list.addEventListener('click', () => {
      const memberSkillsListActive = memberSkills.querySelector('.member__skills-list.active');
      const memberSkillsItemActive = memberSkills.querySelector('.member__skills-item.active');
      const memberSkillsItem = list.querySelector('.member__skills-item');
      const memberSkillsItemText = memberSkillsItem.querySelector('.member__skills-item-text');

      if (memberSkillsListActive) memberSkillsListActive.classList.remove('active');
      if (memberSkillsItemActive) memberSkillsItemActive.classList.remove('active');

      list.classList.add('active');
      memberSkillsItem.classList.add('active');
      memberSkillsItemText.style.width = `${memberSkillsItemText.scrollWidth}px`;
    });
  });
}