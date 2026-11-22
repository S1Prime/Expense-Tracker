export class IncomeService {
  static async getAll() {
    return [];
  }

  static async create(data: any) {
    return { id: "temp", ...data };
  }
}
