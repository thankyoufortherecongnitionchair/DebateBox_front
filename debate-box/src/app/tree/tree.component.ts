import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent {
  skills = [
    {
      id: 1,
      name: 'Research',
      links: [
        { name: 'https://neetcode.io/roadmap', checked: false },
        { name: 'https://google.com', checked: false },
      ],
    },
    {
      id: 2,
      name: 'Argumentation',
      links: [
        { name: 'https://neetcode.io/roadmap', checked: false },
        { name: 'https://neetcode.io/roadmap', checked: false },
      ],
    },
    {
      id: 3,
      name: 'Presentation',
      links: [
        { name: 'https://neetcode.io/roadmap', checked: false },
        { name: 'https://neetcode.io/roadmap', checked: false },
      ],
    },
  ];

  selectedSkill: any;

  selectSkill(skill: any) {
    this.selectedSkill = skill;
  }

  increaseProgress() {
    if (this.selectedSkill) {
      this.selectedSkill.links.forEach((link: any) => {
        link.checked = !!link.checked;
      });

      const checkedCheckboxes = this.selectedSkill.links.filter(
        (link: any) => link.checked
      ).length;

      this.selectedSkill.progress =
        (checkedCheckboxes / this.selectedSkill.links.length) * 100;
    }
  }
}
