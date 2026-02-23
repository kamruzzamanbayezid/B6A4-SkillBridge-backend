// import { prisma } from "../../lib/prisma";

// const createReview = async (payload: any) => {
//   return await prisma.$transaction(async (tx) => {
//     // ১. রিভিউ তৈরি করা
//     const newReview = await tx.review.create({
//       data: payload,
//     });

//     // ২. ওই টিউটরের সব রিভিউ এর গড় বের করা
//     const stats = await tx.review.aggregate({
//       where: { tutorId: payload.tutorId },
//       _avg: { rating: true },
//       _count: { rating: true },
//     });

//     // ৩. টিউটর প্রোফাইল আপডেট করা
//     await tx.tutorProfile.update({
//       where: { id: payload.tutorId },
//       data: {
//         averageRating: stats._avg.rating || 0,
//         reviewCount: stats._count.rating || 0,
//       },
//     });

//     return newReview;
//   });
// };
