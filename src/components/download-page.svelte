<script lang="ts">
  import { onMount } from 'svelte';

  type UpdaterData = {
    version: string;
    notes: string;
    pub_date: string;
    platforms: Record<
      string,
      {
        signature: string;
        url: string;
      }
    >;
  };

  let data: UpdaterData;
  let failedLinks: string[] = [];
  let failedLinkKeys: string[] = [];
  let downloadUrlMap: Record<string, string> = {};

  async function fetchData() {
    const res = await fetch("https://updater.kunkun.sh");
    data = await res.json();
    const version = data.version;
    const downloadProxyBaseUrl = `https://github.com/kunkunsh/kunkun/releases/download/Kunkun-v${version}`;

    downloadUrlMap = {
      /* ---------------------------------- Linux --------------------------------- */
      linux_x86_64_rpm: `${downloadProxyBaseUrl}/Kunkun-${version}-1.x86_64.rpm`,
      linux_x86_64_deb: `${downloadProxyBaseUrl}/Kunkun_${version}_amd64.deb`,
      /* --------------------------------- Windows -------------------------------- */
      windows_x64_exe: `${downloadProxyBaseUrl}/Kunkun_${version}_x64-setup.exe`,
      windows_x64_msi: `${downloadProxyBaseUrl}/Kunkun_${version}_x64_en-US.msi`,
      /* ---------------------------------- MacOS --------------------------------- */
      darwin_aarch64_dmg: `${downloadProxyBaseUrl}/Kunkun_${version}_aarch64.dmg`,
      darwin_aarch64_app: `${downloadProxyBaseUrl}/Kunkun_aarch64.app.tar.gz`,
      darwin_universal_dmg: `${downloadProxyBaseUrl}/Kunkun_${version}_universal.dmg`,
      darwin_universal_app: `${downloadProxyBaseUrl}/Kunkun_universal.app.tar.gz`,
      darwin_x64_dmg: `${downloadProxyBaseUrl}/Kunkun_${version}_x64.dmg`,
      darwin_x64_app: `${downloadProxyBaseUrl}/Kunkun_x64.app.tar.gz`,
    };

    const downloadUrls = Object.values(downloadUrlMap);
    const downloadUrlKeys = Object.keys(downloadUrlMap);
    
    const headFetchRes = await Promise.all(
      downloadUrls.map((url) => fetch(url, { method: "HEAD" }).then((res) => res.ok))
    );
    
    failedLinks = headFetchRes
      .map((valid, idx) => valid ? null : downloadUrls[idx])
      .filter((x): x is string => x !== null);
      
    failedLinkKeys = headFetchRes
      .map((valid, idx) => valid ? null : downloadUrlKeys[idx])
      .filter((x): x is string => x !== null);

    // replace github url with proxy url
    Object.entries(downloadUrlMap).forEach(([key, value]) => {
      downloadUrlMap[key] = value.replace(
        'https://github.com/kunkunsh/kunkun/releases/download/',
        'https://download.kunkun.sh/'
      );
    });
  }

  function isValid(platformKey: string) {
    return !failedLinkKeys.includes(platformKey);
  }

  onMount(() => {
    fetchData();
  });
</script>

{#if data}
  <div>
    <a class="block" target="_blank" href="https://github.com/kunkunsh/kunkun/releases">Download from GitHub Release</a>
    <a class="block" target="_blank" href="https://kunkun.sh/download">Download from Main Website</a>

    <p><strong>Current Version:</strong>{data.version}</p>
    <p>The following download links are proxies to GitHub release files, they could be useful if you cannot access GitHub smoothly.</p>
    
    <h2>Mac</h2>
    <ul>
      {#if isValid('darwin_aarch64_dmg')}<li><a href={downloadUrlMap.darwin_aarch64_dmg}><strong>Apple Sillicon (.dmg)</strong></a></li>{/if}
      {#if isValid('darwin_aarch64_app')}<li><a href={downloadUrlMap.darwin_aarch64_app}><strong>Apple Sillicon (.app)</strong></a></li>{/if}
      {#if isValid('darwin_x64_dmg')}<li><a href={downloadUrlMap.darwin_x64_dmg}><strong>Intel (.dmg)</strong></a></li>{/if}
      {#if isValid('darwin_x64_app')}<li><a href={downloadUrlMap.darwin_x64_app}><strong>Intel (.app)</strong></a></li>{/if}
      {#if isValid('darwin_universal_dmg')}<li><a href={downloadUrlMap.darwin_universal_dmg}><strong>Universal (.dmg)</strong></a></li>{/if}
      {#if isValid('darwin_universal_app')}<li><a href={downloadUrlMap.darwin_universal_app}><strong>Universal (.app)</strong></a></li>{/if}
    </ul>

    <h2>Windows</h2>
    <ul>
      {#if isValid('windows_x64_exe')}<li><a href={downloadUrlMap.windows_x64_exe}><strong>.exe</strong></a></li>{/if}
      {#if isValid('windows_x64_msi')}<li><a href={downloadUrlMap.windows_x64_msi}><strong>.msi</strong></a></li>{/if}
    </ul>

    <h2>Linux</h2>
    <ul>
      {#if isValid('linux_x86_64_rpm')}<li><a href={downloadUrlMap.linux_x86_64_rpm}><strong>.rpm</strong></a></li>{/if}
      {#if isValid('linux_x86_64_deb')}<li><a href={downloadUrlMap.linux_x86_64_deb}><strong>.deb</strong></a></li>{/if}
    </ul>

    {#if failedLinks.length > 0}
      <h2>Broken Download Links</h2>
      <ul>
        {#each failedLinks as url}
          <li>{url}</li>
        {/each}
      </ul>
    {/if}
  </div>
{:else}
  <div>Loading...</div>
{/if}
