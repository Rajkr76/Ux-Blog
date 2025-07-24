import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


const blogData = {
  blogs: [
    {
      id: 1,
      Date: "# DATE: 03/03/25",
      categories:"Stories",
      subtitle: "M_001",
      preview: "Lorem Ipsum is simply dummy text of the printing...", 
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      image: "https://images.unsplash.com/photo-1716034353162-bbdf0bc75ef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
       Date: "# DATE: 22/02/23",
       categories:"Inspiration",
      subtitle: "M_002", 
       preview: "Lorem Ipsum is simply dummy text of the printing...",
      description: "making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written",
      image: "https://plus.unsplash.com/premium_photo-1666174933349-9327dc92addf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
       Date: "# DATE: 11/06/25",
       categories:"Health",
      subtitle: "M_003",
       preview: "Lorem Ipsum is simply dummy text of the printing...",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of ", 
      image: "https://images.unsplash.com/photo-1663814232828-f3392b8a0001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
    },
    
    {
      id: 4,
      Date: "# DATE: 15/09/25",
      categories:"Stories",
      subtitle: "M_004",
       preview: "Lorem Ipsum is simply dummy text of the printing...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum lectus quis dui tristique vestibulum. Curabitur porta risus ut tempus tempus. Mauris posuere metus metus, feugiat semper mi laoreet ut. Nunc vitae metus faucibus, vulputate lorem eu, eleifend turpis. Nunc justo elit, rhoncus nec ipsum ut, faucibus cursus arcu. Nunc sed enim id augue convallis elementum et non justo. Proin a luctus nibh. In at sem tristique, viverra magna in, faucibus eros. Aliquam at efficitur odio. Nulla vulputate porttitor odio, id tempus mauris auctor sit amet. Duis dapibus dui lorem, vitae fringilla tellus ornare vehicula. Nam ullamcorper non ipsum sit amet accumsan. Suspendisse eu justo leo. Sed quis porta justo. Vestibulum porta ullamcorper malesuada. Mauris ut feugiat lectus, eu vehicula metus.", 
      image: "https://images.unsplash.com/photo-1652550808231-aababe6cf419?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
    }
    ,
    {
      id: 5,
      Date: "# DATE: 12/04/25",
      categories:"Health",
      subtitle: "M_005",
       preview: "Lorem Ipsum is simply dummy text of the printing...",
      description: "Suspendisse efficitur hendrerit massa, sed ultricies nisi molestie ut. Phasellus nec dolor quam. Phasellus ac sapien viverra magna varius pretium a nec magna. Nulla purus urna, varius quis libero vitae, accumsan efficitur nibh. Duis aliquam rhoncus diam. Fusce ut sagittis dui. Sed hendrerit et dui sit amet ullamcorper. Ut justo sem, venenatis vel condimentum a, vehicula id massa. Quisque consectetur purus quis eleifend accumsan. Duis vel tortor vel justo efficitur vestibulum non quis enim. Sed tincidunt nibh a varius accumsan. Mauris sit amet tellus fermentum, dapibus lorem vitae, interdum mauris. Aliquam venenatis egestas posuere. Etiam gravida varius enim.Nam quis aliquam nibh. Fusce tincidunt nulla at turpis pretium mattis. Duis ornare at leo porta rutrum. In hac habitasse plate.", 
      image: "https://plus.unsplash.com/premium_photo-1674065309627-ac695abefb47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
    }
    ,
    {
      id: 6,
      Date: "# DATE: 25/09/25",
       categories:"Inspiration",
      subtitle: "M_006",
       preview: "Lorem Ipsum is simply dummy text of the printing...",
      description: "Nulla euismod ullamcorper purus. Duis sit amet odio ut mauris feugiat tincidunt. Quisque tincidunt luctus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.Ut iaculis ex ut erat convallis, nec pretium magna cursus. Aenean ut condimentum ipsum. Vivamus sed velit nec sapien tristique maximus sed vel magna. Sed risus ipsum, tincidunt in interdum at, laoreet ut magna. Nulla vel leo id eros vehicula tempus id eget nisi. Fusce vel massa justo. Donec quis augue rutrum, consectetur lacus sit amet, fringilla dolor. Quisque eget est aliquam, tincidunt diam ac, elementum dui. Donec non dui ut velit pharetra faucibus. Praesent pellentesque diam purus, at tempus nulla ornare quis. Sed tincidunt efficitur lobortis. Fusce volutpat dictum rhoncus. Vivamus id est ultricies, gravida metus non, porttitor risus. Cras non nulla diam.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu dui venenatis neque tristique pulvinar. Vivamus faucibus congue mauris vel malesuada. Nullam pretium mauris ac ipsum imperdiet scelerisque. Mauris eget erat sit amet qu", 
      image: "https://images.unsplash.com/photo-1663814232828-f3392b8a0001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
    }

  ]
};

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-transparent overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      
      <div className='block'>
        <h1  className='font-mono mb-3 text-xl '>{blog.categories}</h1>
        </div>
      <div className="relative h-80  lg:h-[60vh] lg:w-96 sm overflow-hidden  sm:h-[50vh] md:h-[60vh] lg:px-0 sm:px-5 ">
        
        <img 
          src={blog.image} 
          alt={blog.subtitle}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 "
        />
      </div>
     
      <div className="bg-transparent py-2 h-[160px] relative hover:px-2 transition-py duration-300 lg:text-justify sm:h-[180px] md:h-[180px] ">
        
        <h2 className="font-medium font-mono text-[12px] text-gray-600 mb-2 ">
          {blog.Date}
        </h2>
        <h3 className="text-2xl font-bold font-mono text-black mb-3">
          {blog.subtitle}
        </h3>
        <p className="text-sm text-gray-600 overflow-hidden leading-relaxed mb-4">
          {blog.preview}
        </p>
     <Link to={`/openblog/${blog.id}`} state={{ blog }}>
        <div className='bg-black h-[40px] my-5 flex justify-center  align-center overflow-hidden w-[110px]'>
          
          <button className='text-white cursor-pointer '>Read more</button></div>
      </Link>
        <div className="absolute hidden sm:block bottom-4 right-4">
          
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-200" 
            size="lg"
            
          />
          
        </div>
      </div>
      
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-3 px-0 sm:px-6 lg:px-1  bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className='font-mono text-2xl mb-5 px-5 sm:px-6 lg:px-1 relative lg:right-24'>Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-80 gap-y-12 justify-items-center">
          {blogData.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
