
const multiplyValue = (value: number, multiplier?: number): number => {  
    if (!multiplier) {   
            return value * 2;   
        }
         return value * multiplier;
};





const processInput = (value: string | number | boolean) => {

    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    else if (typeof value === "number") {
       return value * 10;
    }
       return value ? "Active" : "Inactive";
}





const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;

return `Location: ${locationName} (${latitude}, ${longitude})`; 
};





const concatenateArrays = <T>(...arrays: T[][]): T[] => 
  arrays.reduce<T[]>((arrays, arr) => arrays.concat(arr), []);




interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];





const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

const names = pluckValues(users, "name"); 
const ids = pluckValues(users, "id");   




class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");





const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise<string>((resolve) => setTimeout(resolve, 1000));
  return "Access Granted";
};