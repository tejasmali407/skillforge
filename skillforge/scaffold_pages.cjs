const fs = require('fs');
const path = require('path');

const baseDir = 'd:/skillforge/skillforge/src';

const structure = {
    'features/auth/components': [],
    'features/auth/hooks': [],
    'features/auth/services': [],
    'features/auth/pages': ['Login.jsx', 'Signup.jsx'],
    
    'features/dashboard/components': [],
    'features/dashboard/hooks': [],
    'features/dashboard/services': [],
    'features/dashboard/pages': ['Dashboard.jsx'],
    
    'features/notfound/pages': ['NotFound.jsx'],
    
    'features/roadmap/components': [],
    'features/roadmap/pages': [],
    'features/roadmap/hooks': [],
    'features/roadmap/services': [],
    
    'features/learning/components': [],
    'features/learning/pages': [],
    'features/learning/lessons': [],
    'features/learning/quizzes': [],
    'features/learning/projects': [],
    'features/learning/hooks': [],
    'features/learning/services': [],
    
    'features/playground/html': [],
    'features/playground/css': [],
    'features/playground/javascript': [],
    'features/playground/react': [],
    'features/playground/components': [],
    'features/playground/pages': [],
    
    'features/profile/components': [],
    'features/profile/pages': [],
    'features/profile/hooks': [],
    'features/profile/services': [],
    
    'features/settings/components': [],
    'features/settings/pages': [],
    'features/settings/services': [],
    
    'features/leaderboard/components': [],
    'features/leaderboard/pages': [],
    'features/leaderboard/services': [],
    
    'features/achievements/components': [],
    'features/achievements/pages': [],
    'features/achievements/services': [],
    
    'features/rewards/components': [],
    'features/rewards/pages': [],
    'features/rewards/services': [],
    
    'features/community/components': [],
    'features/community/pages': [],
    'features/community/hooks': [],
    'features/community/services': [],
    
    'features/admin/dashboard': [],
    'features/admin/users': [],
    'features/admin/content': [],
    'features/admin/quizzes': [],
    'features/admin/projects': [],
    'features/admin/analytics': [],
    'features/admin/components': [],
    'features/admin/hooks': [],
    'features/admin/services': [],
    'features/admin/pages': []
};

let dirsCreated = 0;
let filesCreated = 0;

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        dirsCreated++;
    }
}

function getComponentName(filename) {
    return path.basename(filename, '.jsx');
}

ensureDir(baseDir);

for (const [dir, files] of Object.entries(structure)) {
    const fullDir = path.join(baseDir, dir);
    ensureDir(fullDir);
    for (const file of files) {
        const fullPath = path.join(fullDir, file);
        if (!fs.existsSync(fullPath)) {
            const componentName = getComponentName(file);
            const content = `function ${componentName}() {\n  return <div>${componentName} Page</div>;\n}\n\nexport default ${componentName};\n`;
            fs.writeFileSync(fullPath, content);
            filesCreated++;
        }
    }
}

console.log(`✔ Total folders created: ${dirsCreated}`);
console.log(`✔ Total files created: ${filesCreated}`);
