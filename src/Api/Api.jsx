import axios from 'axios';

async function courseData() {
  try {
    const response = await axios.get("http://localhost:3000/course");
    const prouduct = response.data;
    return prouduct;
  
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}

// Usage example
export async function fetchData() {
  try {
    const data = await courseData();
    console.log(data);
    return data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

fetchData();



async function teacherData() {
  try {
    const response = await axios.get("http://localhost:3000/teachers");
    const teacher = response.data;
    return teacher;
  
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}

// Usage example
export async function fetchDataTeacher() {
  try {
    const dataTeacher = await teacherData();
    console.log(dataTeacher);
    return dataTeacher;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

fetchDataTeacher();


async function studentData() {
  try {
    const response = await axios.get("http://localhost:3000/students");
    const student = response.data;
    return student;
  
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}


export async function fetchDataStudent() {
  try {
    const dataStudent = await studentData();
    console.log(dataStudent);
    return dataStudent;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

fetchDataStudent();