const fs = require('fs');
const path = require('path');

const baseDir = 'd:/skillforge/skillforge/src';

const structure = {
    'app': ['App.jsx', 'AppProviders.jsx', 'AppLayout.jsx'],
    'assets/images': [],
    'assets/icons': [],
    'assets/illustrations': [],
    'assets/animations': [],
    'assets/audio': [],
    'assets/videos': [],
    'assets/fonts': [],
    'components/common': ['Logo.jsx', 'Container.jsx', 'SectionTitle.jsx', 'PageHeader.jsx', 'Loader.jsx', 'PageLoader.jsx', 'EmptyState.jsx', 'ErrorBoundary.jsx', 'ComingSoon.jsx', 'NotFound.jsx'],
    'components/layout': ['Navbar.jsx', 'Sidebar.jsx', 'Footer.jsx', 'Layout.jsx'],
    'components/feedback': ['Toast.jsx', 'Alert.jsx', 'Modal.jsx'],
    'components/ui': [],
    'config': ['firebase.js', 'env.js', 'axios.js'],
    'constants': ['app.js', 'routes.js', 'colors.js', 'themes.js', 'badges.js', 'levels.js', 'roles.js'],
    'data': ['careers.js', 'roadmap.js', 'quiz.js', 'miniProjects.js', 'testimonials.js', 'faqs.js'],
    'features/landing/components': [],
    'features/landing/pages': [],
    'features/landing/hooks': [],
    'features/landing/services': [],
    'features/landing/data': [],
    'features/auth/components': [],
    'features/auth/pages': [],
    'features/auth/hooks': [],
    'features/auth/services': [],
    'features/dashboard/components': [],
    'features/dashboard/pages': [],
    'features/dashboard/hooks': [],
    'features/roadmap/components': [],
    'features/roadmap/pages': [],
    'features/learning/components': [],
    'features/learning/pages': [],
    'features/learning/hooks': [],
    'features/learning/services': [],
    'features/learning/lessons': [],
    'features/learning/quizzes': [],
    'features/learning/projects': [],
    'features/playground/html': [],
    'features/playground/css': [],
    'features/playground/javascript': [],
    'features/playground/react': [],
    'features/profile/components': [],
    'features/profile/pages': [],
    'features/settings/components': [],
    'features/settings/pages': [],
    'features/leaderboard/components': [],
    'features/leaderboard/pages': [],
    'features/achievements/components': [],
    'features/achievements/pages': [],
    'features/rewards/components': [],
    'features/rewards/pages': [],
    'features/community/components': [],
    'features/community/pages': [],
    'features/notifications/components': [],
    'features/notifications/pages': [],
    'features/search/components': [],
    'features/search/pages': [],
    'features/ai/tutor': [],
    'features/ai/interview': [],
    'features/ai/review': [],
    'features/admin/dashboard': [],
    'features/admin/users': [],
    'features/admin/organizations': [],
    'features/admin/courses': [],
    'features/admin/roadmap': [],
    'features/admin/quizzes': [],
    'features/admin/projects': [],
    'features/admin/analytics': [],
    'features/admin/settings': [],
    'hooks': ['useAuth.js', 'useTheme.js', 'useProgress.js', 'useLocalStorage.js', 'useDebounce.js', 'useWindowSize.js'],
    'lib': ['utils.js', 'helpers.js', 'cn.js'],
    'routes': ['AppRoutes.jsx', 'PublicRoute.jsx', 'PrivateRoute.jsx'],
    'services': ['api.js', 'storageService.js'],
    'store': ['authStore.js', 'themeStore.js', 'userStore.js', 'progressStore.js'],
    'styles': ['globals.css', 'theme.css', 'animations.css'],
    'tests': ['README.md'],
    'types': ['README.md'],
    'utils': ['calculateXP.js', 'formatDate.js', 'validators.js', 'storage.js', 'generateId.js']
};

let dirsCreated = 0;
let filesCreated = 0;
let newDirsList = [];
let newFilesList = [];

// Helper function to create missing directories
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        newDirsList.push(dir);
        dirsCreated++;
    }
}

// ensure src exists first
ensureDir(baseDir);

for (const [dir, files] of Object.entries(structure)) {
    const fullDir = path.join(baseDir, dir);
    ensureDir(fullDir);
    for (const file of files) {
        const fullPath = path.join(fullDir, file);
        if (!fs.existsSync(fullPath)) {
            fs.writeFileSync(fullPath, '// TODO: Implement\\n');
            newFilesList.push(fullPath);
            filesCreated++;
        }
    }
}

console.log(`✔ Total folders created: ${dirsCreated}`);
console.log(`✔ Total files created: ${filesCreated}`);
