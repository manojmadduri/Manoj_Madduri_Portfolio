
interface Tab {
  id: string;
  label: string;
}

interface ResumeTabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const ResumeTabs = ({ tabs, activeTab, setActiveTab }: ResumeTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeTab === tab.id 
              ? 'bg-secondary text-white' 
              : 'bg-muted hover:bg-muted/80 text-foreground/70'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ResumeTabs;
