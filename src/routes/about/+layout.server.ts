import { age, email, yearsOfCoding, skills, skillTypes, experiences } from '$lib/utils/data';

export async function load() {
  return {
    age,
    email,
    yearsOfCoding,
    skills,
    skillTypes,
    experiences,
  };
}
