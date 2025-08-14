import Header from "../Header";
import Footer from "../footer";
import CoursesClient from "../courseclient/page";

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <CoursesClient />
      <Footer />
    </div>
  );
}

