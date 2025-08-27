import templatesData from "@/services/mockData/templates.json";

class TemplateService {
  constructor() {
    this.templates = [...templatesData];
  }

  async delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200));
  }

  async getAllTemplates() {
    await this.delay();
    return [...this.templates];
  }

  async getTemplateById(id) {
    await this.delay();
    const template = this.templates.find(t => t.Id === parseInt(id));
    if (!template) {
      throw new Error(`Template with id ${id} not found`);
    }
    return { ...template };
  }

  async getDefaultTemplate() {
    await this.delay();
    return { ...this.templates[0] };
  }
}

export default new TemplateService();