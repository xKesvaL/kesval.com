import { age, email, yearsOfCoding, skills, skillTypes } from '$lib/utils/data';

export async function load() {
  return {
    age,
    email,
    yearsOfCoding,
    skills,
    skillTypes,
  };
}
