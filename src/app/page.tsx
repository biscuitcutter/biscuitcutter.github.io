import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans pb-20">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
            <Image 
              src="/icon.png" 
              alt="BiscuitCutter Logo"
              width={160}
              height={160} 
              className="mb-6 drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4">
              <span className="text-amber-600 dark:text-amber-500">Biscuit</span>Cutter
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A powerful, cross-platform command-line utility for bootstrapping projects from templates. Fully compatible with the Cookiecutter ecosystem.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a href="#getting-started" className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all">
                Get Started
              </a>
              <a href="https://github.com/biscuitcutter/biscuitcutter" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                View on GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
          <div className="sticky top-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Documentation</h3>
            <nav className="space-y-3 text-sm font-medium text-gray-600 dark:text-gray-400 flex flex-col">
              <a href="#getting-started" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Getting Started</a>
              <a href="#cli-usage" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">CLI Usage</a>
              <a href="#template-sources" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Template Sources</a>
              <a href="#template-tracking" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Template Tracking</a>
              <a href="#programmatic-api" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Programmatic API</a>
              <a href="#creating-templates" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Creating Templates</a>
              <a href="#configuration" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Configuration Context</a>
              <a href="#hooks" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Hooks (Pre/Post)</a>
              <a href="#replay" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Replay Feature</a>
              <a href="#license" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">License</a>
            </nav>
          </div>
        </aside>

        {/* Content Details */}
        <main className="flex-1 space-y-16 min-w-0">

          <section id="getting-started" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Getting Started</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              BiscuitCutter is a Node.js implementation of <a href="https://github.com/cookiecutter/cookiecutter" className="text-amber-600 dark:text-amber-500 hover:underline">Cookiecutter</a>. It uses Nunjucks for powerful template rendering and provides a cross-platform, TypeScript-native experience.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Installation</h3>
            <div className="bg-slate-900 dark:bg-black text-green-400 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner mb-4">
              npm install -g biscuitcutter
            </div>
            <p className="text-gray-700 dark:text-gray-300">Or run it on the fly using `npx` without installing globally:</p>
            <div className="bg-slate-900 dark:bg-black text-green-400 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner mt-2">
              npx biscuitcutter &lt;template&gt;
            </div>
          </section>

          <section id="cli-usage" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">CLI Usage</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Run the `biscuitcutter` command followed by the template path or URL. It will interactively prompt you for template variables.</p>
            
            <div className="bg-slate-900 dark:bg-black text-gray-300 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner mb-6">
              $ biscuitcutter gh:audreyfeldroy/cookiecutter-pypackage
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Available Options</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li><code className="bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-100">-o, --output-dir &lt;dir&gt;</code> : Set the destination folder for the generated project.</li>
              <li><code className="bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-100">--no-input</code> : Do not prompt for variables, use defaults.</li>
              <li><code className="bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-100">-c, --config-file &lt;file&gt;</code> : Point to a custom user configuration YAML file.</li>
              <li><code className="bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-100">--default-config</code> : Ignore user config files and use strict repo defaults.</li>
              <li><code className="bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-100">-f, --overwrite-if-exists</code> : Overwrite the output directory instead of throwing an error.</li>
            </ul>
          </section>

          <section id="template-sources" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Multiple Template Sources</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">BiscuitCutter is flexible and resolves templates from various sources seamlessly:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-amber-100 bg-amber-50/30 p-5 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 block">Local Filesystem</h4>
                <code className="text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg block mb-3 shadow-sm">biscuitcutter ./my-template/</code>
                <p className="text-sm text-gray-600 dark:text-gray-400">Generate directly from a local folder on your machine.</p>
              </div>
              <div className="border border-amber-100 bg-amber-50/30 p-5 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 block">GitHub / Repositories</h4>
                <code className="text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg block mb-3 shadow-sm">biscuitcutter gh:user/repo</code>
                <p className="text-sm text-gray-600 dark:text-gray-400">Supports abbreviations for GitHub (`gh:`), GitLab (`gl:`), and Bitbucket (`bb:`).</p>
              </div>
              <div className="border border-amber-100 bg-amber-50/30 p-5 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 block">Zip Files</h4>
                <code className="text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg block mb-3 shadow-sm">biscuitcutter template.zip</code>
                <p className="text-sm text-gray-600 dark:text-gray-400">Extracts and uses templates from local or remote zip archives.</p>
              </div>
              <div className="border border-amber-100 bg-amber-50/30 p-5 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 block">Direct Git URLs</h4>
                <code className="text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg block mb-3 shadow-sm">biscuitcutter https://github.com/...</code>
                <p className="text-sm text-gray-600 dark:text-gray-400">Standard Git clones are fully supported.</p>
              </div>
            </div>
          </section>

          <section id="template-tracking" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Template Tracking</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">Keep your projects in sync with template updates. BiscuitCutter tracks which template version was used to generate your project and can apply updates when the template evolves.</p>
            
            <div className="space-y-8">
              <div className="border border-amber-100 bg-amber-50/30 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg flex items-center gap-2">
                  <code className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">create</code>
                  <span>Create with Tracking</span>
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Create a new project with update tracking enabled. A <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm">.biscuitcutter.json</code> file is stored in the project root to track the template source and commit.</p>
                <div className="bg-slate-900 dark:bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  biscuitcutter create gh:user/template -o ./my-project
                </div>
              </div>

              <div className="border border-blue-100 bg-blue-50/30 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg flex items-center gap-2">
                  <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">check</code>
                  <span>Check for Updates</span>
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Check if your project is up to date with the latest template version. Useful in CI/CD to ensure projects stay current.</p>
                <div className="bg-slate-900 dark:bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  biscuitcutter check -p ./my-project
                </div>
              </div>

              <div className="border border-green-100 bg-green-50/30 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg flex items-center gap-2">
                  <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">update</code>
                  <span>Update Project</span>
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Update your project to the latest template version. BiscuitCutter generates a diff and applies changes, preserving your customizations.</p>
                <div className="bg-slate-900 dark:bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-3">
                  biscuitcutter update -p ./my-project
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mt-3">
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-y, --yes</code> — Skip confirmation prompt</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">-c, --checkout &lt;ref&gt;</code> — Update to a specific branch, tag, or commit</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">--refresh-private-variables</code> — Re-prompt for private variables</li>
                </ul>
              </div>

              <div className="border border-purple-100 bg-purple-50/30 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg flex items-center gap-2">
                  <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">diff</code>
                  <span>Show Differences</span>
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">View the diff between your current project and the latest template version without applying changes.</p>
                <div className="bg-slate-900 dark:bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  biscuitcutter diff -p ./my-project
                </div>
              </div>

              <div className="border border-orange-100 bg-orange-50/30 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg flex items-center gap-2">
                  <code className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">link</code>
                  <span>Link Existing Project</span>
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Link an existing project to a template for future updates. Use this when you have a project that was originally generated without tracking.</p>
                <div className="bg-slate-900 dark:bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  biscuitcutter link gh:user/template -p ./existing-project
                </div>
              </div>
            </div>
          </section>

          <section id="programmatic-api" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Programmatic API</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">You can easily integrate BiscuitCutter into your own Node.js CLI tools or CI/CD pipelines.</p>
            
            <div className="bg-slate-900 dark:bg-black text-gray-300 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner mb-6">
<pre className="m-0"><code className="language-typescript">{`import { biscuitcutter } from 'biscuitcutter';

// 1. Basic Generation
await biscuitcutter('my-template/');

// 2. Automating with No-Input and Overrides
await biscuitcutter('gh:username/repo-name', {
  outputDir: './output',
  noInput: true,
  extraContext: { 
    project_name: 'Super API',
    author: 'Jane Doe'
  },
  overwriteIfExists: true
});`}</code></pre>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Template Tracking API</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">All tracking commands are also available as programmatic functions:</p>

            <div className="bg-slate-900 dark:bg-black text-gray-300 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner">
<pre className="m-0"><code className="language-typescript">{`import { create, check, update, diff, link } from 'biscuitcutter';

// Create a tracked project
const projectDir = await create({
  templateGitUrl: 'gh:user/template',
  outputDir: './output',
  checkout: 'v2.0.0'
});

// Check if project is up to date
const status = await check({ projectDir: './my-project' });
console.log(status.upToDate, status.message);

// Update to latest template version
const result = await update({
  projectDir: './my-project',
  skipApplyAsk: true  // Auto-apply changes
});

// View differences without applying
const changes = await diff({ projectDir: './my-project' });

// Link existing project to a template
await link({
  templateGitUrl: 'gh:user/template',
  projectDir: './existing-project'
});`}</code></pre>
            </div>
          </section>

          <section id="creating-templates" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Creating Templates</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Templates follow the standard Cookiecutter directory structure. You use Nunjucks (similar to Jinja2) syntax to inject variables.</p>
            
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-5 rounded-xl font-mono text-sm mb-6 leading-relaxed">
              my-template/<br/>
              ├── biscuitcutter.json&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// Definitions & defaults"}</span><br/>
              ├── {"{{cookiecutter.project_slug}}"}/&nbsp;&nbsp;<span className="text-gray-500">{"// The rendered output folder"}</span><br/>
              │&nbsp;&nbsp; ├── README.md<br/>
              │&nbsp;&nbsp; ├── package.json<br/>
              │&nbsp;&nbsp; └── src/<br/>
              │&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; └── index.ts<br/>
              └── hooks/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"// Optional lifecycle scripts"}</span><br/>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Variables (biscuitcutter.json)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Define variables and dynamic defaults (cookiecutter.json works as a fallback):</p>
            <div className="bg-slate-900 dark:bg-black text-gray-300 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner mb-4">
<pre className="m-0"><code className="language-json">{`{
  "project_name": "My Awesome Tool",
  "project_slug": "{{ cookiecutter.project_name | lower | replace(' ', '-') }}",
  "author": "Your Name",
  "use_eslint": ["yes", "no"]
}`}</code></pre>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">Note: Arrays in the JSON act as multiple-choice options for the user prompt.</p>
          </section>

          <section id="configuration" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Configuration (.biscuitcutterrc)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Save time answering prompts by creating a <code>.biscuitcutterrc</code> YAML file in your home directory (e.g., <code>~/.biscuitcutterrc</code>).
            </p>
            <div className="bg-slate-900 dark:bg-black text-gray-300 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner mb-4">
<pre className="m-0"><code className="language-yaml">{`default_context:
  author: "Jane Doe"
  email: "jane@example.com"
  github_username: "janedoe"

abbreviations:
  gh: "https://github.com/{0}.git"
  gl: "https://gitlab.com/{0}.git"
  bb: "https://bitbucket.org/{0}.git"`}</code></pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">When generating projects, you will no longer have to manually type out your common parameters like `author` or `email`—they auto-populate as your defaults.</p>
          </section>

          <section id="hooks" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Hooks (Pre/Post Generation)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Hooks allow you to run scripts automatically before or after a project is generated. They exist in the <code>hooks/</code> folder alongside your template.</p>
            
            <ul className="mb-6 space-y-4">
              <li className="bg-amber-50/50 border border-amber-100 p-5 rounded-xl">
                <strong className="text-gray-900 dark:text-gray-100 block mb-2 text-lg">Pre-gen hooks (<code>hooks/pre_gen_project.js</code>)</strong>
                <span className="text-gray-700 dark:text-gray-300">Runs validating logic <em>before</em> the files are written. Great for enforcing naming conventions or validating inputs. It can abort generation by returning a non-zero exit path.</span>
              </li>
              <li className="bg-amber-50/50 border border-amber-100 p-5 rounded-xl">
                <strong className="text-gray-900 dark:text-gray-100 block mb-2 text-lg">Post-gen hooks (<code>hooks/post_gen_project.js</code>)</strong>
                <span className="text-gray-700 dark:text-gray-300">Runs <em>after</em> generation. Use this to delete unwanted files (e.g. conditionally removing a test file), initialize a local git repo, run <code>npm install</code>, etc.</span>
              </li>
            </ul>
          </section>

          <section id="replay" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">Replay Feature</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">BiscuitCutter caches your inputs every time you run a template. If you make a mistake and need to re-run the same template, you can replay your exact previous answers without re-typing them.</p>
            
            <div className="bg-slate-900 dark:bg-black text-gray-300 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-inner">
              <span className="text-slate-500 italic"># First, generate normally</span><br/>
              <span className="text-blue-400">$</span> biscuitcutter my-template/<br/>
              <br/>
              <span className="text-slate-500 italic"># Oops! Need to restart. Pass the --replay flag to reuse all answers automatically</span><br/>
              <span className="text-blue-400">$</span> biscuitcutter --replay my-template/
            </div>
          </section>

          <section id="license" className="scroll-mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-4">License</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              BiscuitCutter is distributed under the <strong>MIT License</strong>.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              You are free to use, modify, and distribute this software in your own projects, including commercial applications, without any hassle. For the complete license text, please refer to the <a href="https://github.com/biscuitcutter/biscuitcutter/blob/main/LICENSE" className="text-amber-600 dark:text-amber-500 hover:text-amber-800 transition-colors underline underline-offset-2">LICENSE</a> file in the GitHub repository.
            </p>
          </section>

        </main>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 flex flex-col items-center">
          <p className="mb-2">BiscuitCutter is an open source project released under the MIT License.</p>
          <div className="flex gap-4 mb-2">
            <a href="https://github.com/biscuitcutter/biscuitcutter" className="text-amber-600 dark:text-amber-500 hover:text-amber-800 transition-colors font-medium">GitHub Repository</a>
            <span>&bull;</span>
            <a href="https://www.npmjs.com/package/biscuitcutter" className="text-amber-600 dark:text-amber-500 hover:text-amber-800 transition-colors font-medium">NPM Package</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
