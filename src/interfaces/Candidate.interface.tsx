interface Candidate {
    avatar_url: string;
    name?: string;
    login: string;
    location?: string;
    email?: string;
    html_url: string;
    company?: string;
    bio?: string;
    [key: string]: any; // index signature
  }
  
  export default Candidate;