// Supabase設定
const SUPABASE_URL = 'https://droygzvkgtwdrfzwgsgx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyb3lnenZrZ3R3ZHJmendnc2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyNTUwNzIsImV4cCI6MjA4NTgzMTA3Mn0.cWxD7qZTymLtdauEClVM9Gr8DS1z4OywirDVjpA4Pg0';

// Supabaseクライアント初期化
// @supabase/supabase-js@2のCDN版は、supabaseというグローバル変数としてライブラリを提供します
// クライアントインスタンスをグローバル変数として設定
(function() {
    // supabaseライブラリが利用可能か確認
    if (typeof supabase === 'undefined') {
        console.error('Supabaseライブラリが読み込まれていません');
        return;
    }
    
    // 既に初期化されている場合はそれを使用
    if (typeof window.supabaseClient !== 'undefined') {
        window.supabase = window.supabaseClient;
        return;
    }
    
    // クライアントを作成してグローバル変数に設定
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabase = window.supabaseClient;
})();
