import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

/**
 * Fetches all files in a directory located in the public directory and returns an array of their paths.
 * @param {string} directory - The directory to search in.
 * @param {string} [searchString] - The optional search string to filter files by name (case-insensitive).
 * @returns {string[]} The array of file paths.
 */
export function getAssetsFromDirectory(directory: string, searchString?: string): string[] {
  try {
    const imagesDirectory = join(process.cwd(), 'public', directory);

    // Ensure the directory exists
    if (!statSync(imagesDirectory).isDirectory()) {
      throw new Error(`The directory "${imagesDirectory}" does not exist or is not a directory.`);
    }

    const fileNames = readdirSync(imagesDirectory);

    // Filter out non-file entries and apply search string filter if provided
    return fileNames
      .filter(fileName => statSync(join(imagesDirectory, fileName)).isFile())
      .filter(fileName => searchString ? fileName.toLowerCase().startsWith(searchString.toLowerCase()) : true)
      .map(fileName => join(directory, fileName).replace(/\\/g, '/'));
  } catch (error) {
    console.error(`Error reading directory "${directory}":`, error);
    return [];
  }
}

export function getBrawlerAssets(brawlerName: string) {
  const searchString = `${brawlerName.toLowerCase()}-`;
  const skinPaths = getAssetsFromDirectory('/images/skins', searchString);
  return { skinPaths };
}
