describe('카운터 앱', () => {
    // 첫 번째 테스트 시나리오
    it('페이지에 진입하면 카운터 앱이 정상적으로 실행된다(0이 표시된다)', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=counter]').contains(0);
    })

    it('플러스 버튼을 누르면 카운터가 1이 증가된다', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=add-button]').click;
    })
})