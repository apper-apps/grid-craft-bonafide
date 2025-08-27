import cvData from "@/services/mockData/cvData.json";

class CVService {
  constructor() {
    this.data = { ...cvData };
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    try {
      const stored = localStorage.getItem("cvData");
      if (stored) {
        this.data = { ...this.data, ...JSON.parse(stored) };
      }
    } catch (error) {
      console.warn("Failed to load CV data from localStorage:", error);
    }
  }

  saveToLocalStorage() {
    try {
      localStorage.setItem("cvData", JSON.stringify(this.data));
    } catch (error) {
      console.warn("Failed to save CV data to localStorage:", error);
    }
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200));
  }

  async getCVData() {
    await this.delay();
    return { ...this.data };
  }

  async updatePersonalInfo(personalInfo) {
    await this.delay();
    this.data.personalInfo = { ...this.data.personalInfo, ...personalInfo };
    this.saveToLocalStorage();
    return { ...this.data.personalInfo };
  }

  async updateExperience(experience) {
    await this.delay();
    this.data.experience = [...experience];
    this.saveToLocalStorage();
    return [...this.data.experience];
  }

  async updateEducation(education) {
    await this.delay();
    this.data.education = [...education];
    this.saveToLocalStorage();
    return [...this.data.education];
  }

  async updateSkills(skills) {
    await this.delay();
    this.data.skills = [...skills];
    this.saveToLocalStorage();
    return [...this.data.skills];
  }

  async addExperience(experience) {
    await this.delay();
    const newId = Math.max(...this.data.experience.map(exp => exp.Id), 0) + 1;
    const newExperience = { ...experience, Id: newId };
    this.data.experience.push(newExperience);
    this.saveToLocalStorage();
    return newExperience;
  }

  async addEducation(education) {
    await this.delay();
    const newId = Math.max(...this.data.education.map(edu => edu.Id), 0) + 1;
    const newEducation = { ...education, Id: newId };
    this.data.education.push(newEducation);
    this.saveToLocalStorage();
    return newEducation;
  }

  async addSkill(skill) {
    await this.delay();
    const newId = Math.max(...this.data.skills.map(s => s.Id), 0) + 1;
    const newSkill = { ...skill, Id: newId };
    this.data.skills.push(newSkill);
    this.saveToLocalStorage();
    return newSkill;
  }

  async deleteExperience(id) {
    await this.delay();
    this.data.experience = this.data.experience.filter(exp => exp.Id !== id);
    this.saveToLocalStorage();
    return true;
  }

  async deleteEducation(id) {
    await this.delay();
    this.data.education = this.data.education.filter(edu => edu.Id !== id);
    this.saveToLocalStorage();
    return true;
  }

  async deleteSkill(id) {
    await this.delay();
    this.data.skills = this.data.skills.filter(skill => skill.Id !== id);
    this.saveToLocalStorage();
    return true;
  }
}

export default new CVService();