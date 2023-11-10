import React, { useState } from 'react';
import PostCard from './PostCard';
import '../css/RecommendedPosts.css';

function RecommendedPosts() {
  // Define the maximum number of characters to display initially
  const maxContentLength = 50;

  // Use state to manage which PostCard's content to display in the popup
  const [selectedPost, setSelectedPost] = useState(null);

  // Sample post data
  const posts = [
    {
      title: 'Riches With Contentment',
      content: 'In the fast-paced and often materialistic world we live in, the pursuit of riches is a common goal for many. However, true wealth is not just about accumulating money and possessions, it is about finding contentment and fulfillment in our lives. True wealth encompasses not only financial success but also emotional, psychological, and spiritual well-being. It is about achieving a balance that allows you to enjoy the journey of life rather than constantly chasing after external markers of success.For many, the pursuit of riches is rooted in the belief that it will lead to happiness. However, research in the field of positive psychology consistently shows that happiness is not solely dependent on wealth. While financial stability can certainly alleviate stress and provide opportunities, it is not the sole determinant of your well-being. "Riches with contentment" is about redefining our notion of wealth and well-being. It is a reminder that the pursuit of happiness should be grounded in inner peace and emotional fulfillment rather than external riches. By prioritizing our mental health and cultivating a sense of gratitude, simplicity, and resilience, we can truly find riches in our most meaningful moments. Remember that true wealth lies not just in our bank accounts but in the richness of our hearts and minds. ',
      image:'https://images.pexels.com/photos/11475396/pexels-photo-11475396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      
    },
    {
      title: 'Social Media Addiction',  
      content: 'In the age of smartphones and constant connectivity, social media has become an integral part of our daily lives. While it offers many benefits, such as staying in touch with friends and accessing information, the dark side of social media addiction has emerged as a significant concern. Social media addiction, also known as social media dependency, refers to an excessive and compulsive use of social networking platforms. Individuals with this addiction may find it challenging to control the amount of time they spend on social media, leading to negative consequences in their personal and professional lives. Social media platforms are designed to be addictive. The constant flow of notifications, the appeal of likes and comments, and the fear of missing out (FOMO) can make these platforms incredibly compelling. The algorithms used by these platforms are finely tuned to keep users engaged for longer periods, often at the expense of other real-world activities. Excessive use of social media can lead to feelings of anxiety and depression, as users may constantly compare their lives to others and feel inadequate, Paradoxically, heavy social media users can become more socially isolated in real life, as they spend less time interacting face-to-face with friends and family,Late-night scrolling and notifications can disrupt sleep patterns, leading to fatigue and decreased cognitive functioning, The curated nature of social media can lead to a distorted self-image, as users often present idealized versions of themselves. To help yourself, use strategies like taking periodic breaks from social media to reset your habits and regain perspective, use app settings or third-party apps to limit the time you spend on social media each day, Be selective about the accounts you follow and unfollow or mute those that consistently make you feel anxious or inadequate, Talk to friends, family, or a mental health professional if you feel that social media addiction is impacting your mental health and Find activities that bring you joy and fulfillment outside the digital world. ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
    },
    {
      title: 'Fears of Fatherhood',  
      content:'Fatherhood is a profound and life-changing experience that brings immense joy and fulfillment, but it can also evoke fears and anxieties in many expectant and new fathers. One of the most significant fears associated with fatherhood is the fear of responsibility. As a father, you will be responsible for the well-being, safety, and upbringing of your child. This sense of responsibility can feel overwhelming at times, especially if it is your first child. Remember that no one is a perfect parent, and it is normal to have doubts and fears. Seek guidance and support from experienced fathers, read parenting books, and attend parenting classes to gain confidence in your abilities. Providing for a family can be financially challenging, and this fear often creeps into the minds of expectant fathers. Worries about how to cover the costs of raising a child, education, and healthcare can be a significant source of stress. Create a financial plan and budget for the needs of your family. Prioritize savings and investments, and consider seeking advice from a financial advisor. Remember that financial planning is an ongoing process, and it is essential to be adaptable. ',
      image: 'https://images.pexels.com/photos/10127367/pexels-photo-10127367.jpeg?cs=srgb&dl=pexels-deane-bayas-10127367.jpg&fm=jpg' 
    },
    {
      title: 'Challenges of Teenage Life',  
      content: 'The teenage years are a time of profound growth and self-discovery, but they also come with a set of unique challenges that can significantly impact a your mental and emotional well-being. Teenagers often face substantial academic pressure, including exams, homework, and the expectations of parents and teachers. This pressure can lead to stress and anxiety. Encourage a healthy study routine, open communication with teachers, and provide emotional support to help teenagers manage academic pressure. Teenagers may feel the need to conform to the expectations and behaviors of their peers. This can lead to risky behaviors and emotional turmoil. Teach critical thinking, decision-making skills, and encourage open discussions about peer pressure.',
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
    },
    {
      title: 'The Power of Sober Reflection',  
      content: 'Sober reflection serves as a valuable tool for self-discovery, personal growth, and mental clarity. In this fast-paced world, taking the time to pause, introspect, and assess our lives can have profound benefits for our mental health and overall well-being. Sober reflection is a valuable practice that can significantly enhance your mental and emotional well-being. By setting aside time for introspection and self-discovery, you can gain a deeper understanding of yourself, your goals, and your purpose in life. Make it a habit to engage in sober reflection regularly, and you will find that it becomes a cornerstone of your personal growth and a source of greater peace and contentment in your life.',
      image: 'https://images.pexels.com/photos/2413839/pexels-photo-2413839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
    },
    {
      title: 'Fruits and Mental Health',  
      content: 'When we think about maintaining good mental health, our thoughts often turn to therapy, exercise, and stress management techniques. However, our diet also plays a crucial role in supporting our mental well-being. Fruits are not only delicious but also a powerful addition to your mental health toolkit. By incorporating a variety of nutrient-rich fruits into your diet, you can enhance your mood, reduce stress, and support overall mental well-being. A balanced diet that includes a rainbow of fruits can complement other mental health practices and help you feel your best.',
      image: 'https://images.pexels.com/photos/9811521/pexels-photo-9811521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      title: 'Self Control Feels Like Heaven',  
      content: 'Self-control is the capacity to regulate your emotions, thoughts, and behaviors in the pursuit of long term goals and values, rather than succumbing to immediate gratification or impulses. It is a skill that can be developed and honed over time. Self-control truly feels like heaven because it enables individuals to lead more fulfilling lives, characterized by emotional resilience, better decision-making, reduced stress, and improved relationships. By developing and nurturing self-control, you can unlock the key to a more harmonious and purposeful existence, where your actions align with your long-term goals and values, ultimately leading to a sense of inner peace and contentment.',
      image: 'https://images.pexels.com/photos/11202095/pexels-photo-11202095.jpeg?cs=srgb&dl=pexels-jasmin-chew-11202095.jpg&fm=jpg'
    },
    {
      title:'The Power of a Smile',  
      content: 'A smile is a universal expression of joy, optimism, and resilience. Even in the face of adversity, smiling can serve as a powerful coping mechanism and a catalyst for positive change. Smiling through trials is a mindset that can transform how you perceive and navigate challenges. By embracing the power of a smile and incorporating these strategies into your life, you can improve your mental and emotional resilience, reduce stress, and find greater satisfaction and fulfillment, even in the most trying of times. Remember that your ability to smile in the face of adversity is a testament to your inner strength and your capacity for growth and positive change.',
      image: 'https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630',
    },
    // Add more posts here
  ];

  // Handle the "Read More" click to display full content in the popup
  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setSelectedPost(null);
  };

  return (
    <div className="recommendedVideos">
      <h2>MENTAL REMINDERS FOR YOU</h2>
      <div className="recommendedVideos_videos">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content.length > maxContentLength ? `${post.content.slice(0, maxContentLength)}...` : post.content}
            image={post.image}
          >
            {post.content.length > maxContentLength && (
              <button onClick={() => handleReadMore(post)}>Read More</button>
            )}
          </PostCard>
        ))}
      </div>

      {selectedPost && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecommendedPosts;
