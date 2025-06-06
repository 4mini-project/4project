// src/api.js
import axios from 'axios';

const API_BASE_URL = '/api'; // 백엔드 API 기본 URL

// 책 생성
export const createBook = async (bookData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/books`, bookData);
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
};

// 모든 책 조회 (검색 및 페이지네이션 포함)
export const getAllBooks = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`, { params });
    return response.data; // Page<BookResponse> 형태
  } catch (error) {
    console.error('Error fetching all books:', error);
    throw error;
  }
};

// 특정 책 조회
export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${id}`);
    return response.data; // BookResponse 객체
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    throw error;
  }
};

// 책 전체 업데이트 (PUT)
export const updateBook = async (id, bookData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/books/${id}`, bookData);
    return response.data; // BookResponse 객체
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error);
    throw error;
  }
};

// 책 부분 업데이트 (PATCH)
export const partialUpdateBook = async (id, bookData) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/books/${id}`, bookData);
    return response.data; // BookResponse 객체
  } catch (error) {
    console.error(`Error partial updating book with ID ${id}:`, error);
    throw error;
  }
};

// 책 삭제
export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/books/${id}`);
    return response.data; // 보통 void 또는 204 No Content
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    throw error;
  }
};


// DALL-E를 이용한 책 표지 이미지 생성
export const generateBookCoverImage = async (title, content, apiKey) => { // content 매개변수 추가
  if (!apiKey) {
    throw new Error('API Key is required to generate an image.');
  }
  if (!title) {
    throw new Error('Title is required to generate an image.');
  }
  if (!content) { // content 유효성 검사 추가
    throw new Error('Content is required to generate an image with the new prompt.');
  }

  // 요청하신 프롬프트
  const prompt = `
  Create a high-quality 3D-rendered image of a single hardcover book standing upright.

  The book is titled "${title}".
  Its story is about: ${content}

  Design the front cover to visually reflect the core feeling or theme of the story. Use symbolic or abstract imagery that conveys the mood — such as hope, loneliness, growth, mystery, or wonder — based on the story.

  The cover should use artistic and metaphorical visuals that hint at the genre and tone without using any text or characters.

  Keep the background simple and softly lit. Focus on making the book appear visually striking and emotionally resonant.
  `;

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt, // 수정된 프롬프트 사용
        size: "1024x1024",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error ? errorData.error.message : 'Failed to generate image from OpenAI.');
    }

    const data = await response.json();
    const url = data?.data?.[0]?.url;
    if (!url) {
      throw new Error('No image URL received from OpenAI.');
    }
    return url;
  } catch (error) {
    console.error("Image generation failed:", error);
    throw error;
  }
};
