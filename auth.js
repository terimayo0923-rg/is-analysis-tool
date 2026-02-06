// 認証関連の共通関数

// 現在のユーザーを取得
async function getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
        console.error('ユーザー取得エラー:', error);
        return null;
    }
    return user;
}

// ユーザーが管理者かどうかを判定
async function isAdmin() {
    const user = await getCurrentUser();
    if (!user) return false;
    
    // user_metadataのroleを確認
    const role = user.user_metadata?.role;
    return role === 'admin';
}

// ログアウト
async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('ログアウトエラー:', error);
        alert('ログアウトに失敗しました: ' + error.message);
        return;
    }
    window.location.href = 'index.html';
}

// 認証状態をチェックして、未ログインならログイン画面へリダイレクト
async function requireAuth() {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error || !session) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// 管理者権限をチェックして、管理者でなければダッシュボードへリダイレクト
async function requireAdmin() {
    const isAdminUser = await isAdmin();
    if (!isAdminUser) {
        window.location.href = 'dashboard.html';
        return false;
    }
    return true;
}
