"use strict";
import { UrlMapping } from '../models/urlMapping';
import { expect } from 'chai';
describe('UrlShortener', () => {
  it('should create a new UrlMapping object with the provided originalUrl and shortUrl', () => {
    // Arrange
    const originalUrl = go;
    const shortUrl = 'abc123';
    // Act
    const urlMapping = new UrlMapping({
      originalUrl,
      shortUrl,
    });
    // Assert
    expect(urlMapping.originalUrl).to.equal(originalUrl);
    expect(urlMapping.shortUrl).to.equal(shortUrl);
  });
});
describe('UrlShortener', () => {
  // Existing test code...
  it('should find a UrlMapping object by shortUrl', async () => {
    // Arrange
    const shortUrl = 'abc123';
    const expectedUrlMapping = new UrlMapping({
      originalUrl: 'https://www.example.com',
      shortUrl,
    });
    await expectedUrlMapping.save();
    // Act
    const urlMapping = await UrlMapping.findOne({ shortUrl });
    // Assert
    expect(urlMapping).to.deep.equal(expectedUrlMapping);
  });
});
