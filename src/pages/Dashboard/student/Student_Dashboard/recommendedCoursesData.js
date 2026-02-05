const recommendedCoursesData = [
  {
    id: 1,
    title: "Fullstack Python Web Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCweKe1n4nSrHx9h33XMVn4j7qQ3UcJOnXRzS2EGYi5ZSBD6Fy-bzNT6KhcgMsamMDllKupFIL3TOW5K5do_G70hQ1PgZny3rUtU9Set2dCy4BN6sXsOdrQL0EW55KbPnceyE1tUaYtJU3ER05SBTqPbx24OcN6FHtxf0Vmcc3QxW4a0yDXTJoBldozyxxBxgDYyaOcslhfvByfPHxX8EBZwCouApP0cmGcti3VFZVmNEM32BjsXVnrEKqPpjx3E3aTy3Y6FGdrQw",
    category: "Development",
    categoryIcon: "code",
    badge: { text: "Bestseller", bgColor: "bg-studprimary" },
    duration: "45h 20m",
    lessons: 120,
    rating: 4.8,
    reviews: 12500,
    level: "Intermediate",
    instructor: "Prof. Alan Turing",
    instructorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7HyDHW6OliEg1ES5uREtNM7e3sm-f5V6-ky7Oj2T9o2i2SmQ8UXkCUgNCZvstdZyEpjTX2XCM8nEYFij6KUz7ytji5uLM_VziaJxSyMfCBlYkiQBFTM5Epcw9pjiyq76MkCrqUZj5_hCrK0Tb9xTYwTwGih-FBWi09HO9p_EQi4qi-GuBepLbbRlQ5rKtaBeNopQVojboaudch8zA1BwN_-DP9cudjEoxVhpo7B80vPAwSDCcr6xnQnu5VRoaj1OH02j1Pgxl6g",
    price: 89.99,
  },
  {
    id: 2,
    title: "Next.js 14 Enterprise Patterns",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdfwQZszhYaM5-g4f4-SixjgWGQ5KozcyUG2jnaBu6Rt24yzF2JNvFJKvNPjue_9UmDDeekFj88gHU4fYWp2XqNBG_rHgA0X8dsU82xN3YiJQJiGzNo1dHzMPXjSBS2rM-rBmxDUDDvoJeZk-bSZQUKi06LVBLVfzx2Tsbw3Lqj4nCeWX9i8iqLSq-hZWrwsxoELVs4g8F8i5VqFaAquD-rUJOn6uBfJKK2SzH2E50xRwidvqL8GBWu0Yk2lepgcUhwohs5E-QIA",
    category: "Development",
    categoryIcon: "code",
    badge: { text: "New", bgColor: "bg-blue-500" },
    duration: "12h 45m",
    lessons: 42,
    rating: 4.9,
    reviews: 2100,
    level: "Advanced",
    instructor: "Elena Gilbert",
    instructorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJpiAS7h0KVMkWupdRHFgPAQ0kO2IIDUt3Y5-Vdlw0SuMJDbRXK-RWCyr60z1pOllZUgQB41aBVrUFrqAF7HrvtzMjE5Sl9hJDRBtO94p31coGk9DZcEdpZ06yAHpKPhdGOq8af2xL5pLDPVk0pbNcI4QiEHtelPxK2vAafy52y84KWkmfdTh1xvX-XqzEkusuB-LEpKz8MeyBYmtrDj9_AeVbaEZjgSfxF-YhDZyDe-QhtkdcJuGJzJXOiHYvbuYrmY4FVNLdyQ",
    price: 49.99,
  },
  {
    id: 3,
    title: "Machine Learning for Dummies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQnWVe8h_9BZert10ozlV9gmRrVI4mnBzWxNn_gPVVR9XcPulEfqfy4phsHZIxqX-79hh1YlL3VqZ9BDITdsc0rPXslAQJKzpvPryW3Gq3XBEGlRF-pmyB1z47VPguKGu8IhZnan4xrxypr5D0yfE6KWEMSTWefBOrAlj6ieQ5BaOEAxJgA-Z_CJL8GgOTgTYuoYlOcOKMYfNryZxWgoDVrcW5e1pmaaPxoYJJwjxJtb6medlcu9SDdnupHtF40ggo6NmsRiZpaw",
    category: "AI & ML",
    categoryIcon: "smart_toy",
    badge: { text: "Premium", bgColor: "bg-studprimary" },
    duration: "32h 10m",
    lessons: 88,
    rating: 4.7,
    reviews: 8900,
    level: "Intermediate",
    instructor: "Robert Downey",
    instructorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClcR0prvpaYncoJKf1koboBdcDuK6rmH_INVYxO53UtA1x3iYzPYIAevGAiemDb8B5CjUgEEk_j81QU43Vdy045avwS5SLAQMBxYVG4liz71SIchOMn6kjHkXB56hTTZ0EqdhZ2R2_QWUK46jxaCdMNCm1_dJwy3dpPqr1n8xo6lzH9MQdjTquR0KL4G072V6Sf2JgEVJJ0LXoTYzITN5FSbIya6gq6FoHzJiQJucesYnLBuZMal_rmdEXV52BFIswgM2Dx1cLeQ",
    price: 124.99,
  },
  {
    id: 4,
    title: "The Psychology of UX Research",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPXdYheTo4XA0FGn6XKr09EXVh2x5oB8qODBYPBp5uEHlVkiufUPqGQulSeSClKrmNyVb0uUGmHceCRIiBb8KDvKzhWysaB3S3Mhhfa7SPVUhivxHwQtuxYlqN3sOrq_9PTE58vLuYInHSHnFEnPKc-NpWgToTTA_2pWoIpWGpPS1UsOJHkLIRTclNYee1wMt1J7kZBVXxl5CjyP1v-vAP8DYZp4UGoWnqgpiOO5qR0dERsFx0ZdCXCGx93nJxD9j_JB9pb_G4EQ",
    category: "Design",
    categoryIcon: "palette",
    badge: null,
    duration: "18h 30m",
    lessons: 55,
    rating: 4.9,
    reviews: 4500,
    level: "Beginner",
    instructor: "Emma Stone",
    instructorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBBGPbg4uWrHC3HeMadGOSR6Wvv6aa43JyInLI_TmaSRoNvF_qFVkK0C35-aWOpDGHKn2CcQ5FikUjjGLLHLJY96iR8wPbRU488eAmMbUdU4AR2eD3Hms64WL7sIuUxWgMY146nImlUdNy7l0u-oEGgFiN-9ch5OM8e1uuWPpfy_kkTNkyyLicA6ESrk3m28xJWG4UoMvo2YT0SDTAHGlIN2upiI2PuEt-KQRULFCTKf-ojffnHmSg-x3bcQ-MMQq0lvcLLTrzqQ",
    price: 64.5,
  },
  {
    id: 5,
    title: "Advanced TypeScript Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCweKe1n4nSrHx9h33XMVn4j7qQ3UcJOnXRzS2EGYi5ZSBD6Fy-bzNT6KhcgMsamMDllKupFIL3TOW5K5do_G70hQ1PgZny3rUtU9Set2dCy4BN6sXsOdrQL0EW55KbPnceyE1tUaYtJU3ER05SBTqPbx24OcN6FHtxf0Vmcc3QxW4a0yDXTJoBldozyxxBxgDYyaOcslhfvByfPHxX8EBZwCouApP0cmGcti3VFZVmNEM32BjsXVnrEKqPpjx3E3aTy3Y6FGdrQw",
    category: "Development",
    categoryIcon: "code",
    badge: { text: "Hot", bgColor: "bg-red-500" },
    duration: "28h 15m",
    lessons: 76,
    rating: 4.8,
    reviews: 6200,
    level: "Advanced",
    instructor: "Prof. Alan Turing",
    instructorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7HyDHW6OliEg1ES5uREtNM7e3sm-f5V6-ky7Oj2T9o2i2SmQ8UXkCUgNCZvstdZyEpjTX2XCM8nEYFij6KUz7ytji5uLM_VziaJxSyMfCBlYkiQBFTM5Epcw9pjiyq76MkCrqUZj5_hCrK0Tb9xTYwTwGih-FBWi09HO9p_EQi4qi-GuBepLbbRlQ5rKtaBeNopQVojboaudch8zA1BwN_-DP9cudjEoxVhpo7B80vPAwSDCcr6xnQnu5VRoaj1OH02j1Pgxl6g",
    price: 79.99,
  },
  {
    id: 6,
    title: "Cloud Architecture Fundamentals",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdfwQZszhYaM5-g4f4-SixjgWGQ5KozcyUG2jnaBu6Rt24yzF2JNvFJKvNPjue_9UmDDeekFj88gHU4fYWp2XqNBG_rHgA0X8dsU82xN3YiJQJiGzNo1dHzMPXjSBS2rM-rBmxDUDDvoJeZk-bSZQUKi06LVBLVfzx2Tsbw3Lqj4nCeWX9i8iqLSq-hZWrwsxoELVs4g8F8i5VqFaAquD-rUJOn6uBfJKK2SzH2E50xRwidvqL8GBWu0Yk2lepgcUhwohs5E-QIA",
    category: "Development",
    categoryIcon: "cloud",
    badge: { text: "Trending", bgColor: "bg-purple-500" },
    duration: "22h 40m",
    lessons: 64,
    rating: 4.6,
    reviews: 3800,
    level: "Intermediate",
    instructor: "Elena Gilbert",
    instructorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJpiAS7h0KVMkWupdRHFgPAQ0kO2IIDUt3Y5-Vdlw0SuMJDbRXK-RWCyr60z1pOllZUgQB41aBVrUFrqAF7HrvtzMjE5Sl9hJDRBtO94p31coGk9DZcEdpZ06yAHpKPhdGOq8af2xL5pLDPVk0pbNcI4QiEHtelPxK2vAafy52y84KWkmfdTh1xvX-XqzEkusuB-LEpKz8MeyBYmtrDj9_AeVbaEZjgSfxF-YhDZyDe-QhtkdcJuGJzJXOiHYvbuYrmY4FVNLdyQ",
    price: 94.99,
  },
];

export default recommendedCoursesData;
